
import React, { useEffect, useRef, useState } from 'react';
import { X, Eye } from 'lucide-react';

interface SpreadsheetSimulationProps {
  onClose: () => void;
  onUpdate?: (gridState: string) => void;
}

interface CellData {
    rawValue: string;
    displayValue: string | number;
    formula: string | null;
    isFormula: boolean;
}

const SpreadsheetSimulation: React.FC<SpreadsheetSimulationProps> = ({ onClose, onUpdate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCell, setActiveCell] = useState('A1');
  const [formulaValue, setFormulaValue] = useState('');
  
  // Use a ref to store the grid instance
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sheetRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    class MobileSpreadsheet {
        rows: number;
        cols: number;
        data: Map<string, CellData>; // Enhanced data structure
        selectedCell: { row: number; col: number };
        updateCallback?: (data: string) => void;
        
        constructor(callback?: (data: string) => void) {
            this.rows = 50;
            this.cols = 10;
            this.data = new Map();
            this.selectedCell = { row: 0, col: 0 };
            this.updateCallback = callback;
            
            this.init();
        }
        
        init() {
            this.createGrid();
            this.setupEventListeners();
        }
        
        createGrid() {
            const grid = containerRef.current?.querySelector('#spreadsheetGrid');
            const colHeaders = containerRef.current?.querySelector('#columnHeaders');
            const rowHeaders = containerRef.current?.querySelector('#rowHeaders');
            
            if (!grid || !colHeaders || !rowHeaders) return;

            grid.innerHTML = '';
            colHeaders.innerHTML = '';
            rowHeaders.innerHTML = '';
            
            // Create column headers (A-J)
            for (let col = 0; col < this.cols; col++) {
                const colHeader = document.createElement('div');
                colHeader.className = 'column-header';
                colHeader.textContent = this.numberToColumn(col);
                colHeader.dataset.col = col.toString();
                colHeaders.appendChild(colHeader);
            }
            
            // Create row headers (1-50)
            for (let row = 0; row < this.rows; row++) {
                const rowHeader = document.createElement('div');
                rowHeader.className = 'row-header';
                rowHeader.textContent = (row + 1).toString();
                rowHeader.dataset.row = row.toString();
                rowHeaders.appendChild(rowHeader);
            }
            
            // Create grid cells
            (grid as HTMLElement).style.gridTemplateColumns = `repeat(${this.cols}, var(--cell-width))`;
            (grid as HTMLElement).style.gridTemplateRows = `repeat(${this.rows}, var(--cell-height))`;
            
            for (let row = 0; row < this.rows; row++) {
                for (let col = 0; col < this.cols; col++) {
                    const cell = this.createCell(row, col);
                    grid.appendChild(cell);
                }
            }
            
            this.selectCell(0, 0);
        }
        
        createCell(row: number, col: number) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = row.toString();
            cell.dataset.col = col.toString();
            cell.dataset.address = `${this.numberToColumn(col)}${row + 1}`;
            cell.contentEditable = 'true';
            cell.spellcheck = false;
            
            const cellId = `${row},${col}`;
            const cellData = this.data.get(cellId);
            
            if (cellData) {
                cell.textContent = String(cellData.displayValue);
                if (cellData.isFormula) {
                    cell.classList.add('formula');
                }
            }
            
            return cell;
        }
        
        setupEventListeners() {
            const grid = containerRef.current?.querySelector('#spreadsheetGrid');
            if (grid) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                grid.addEventListener('click', (e: any) => {
                    if (e.target.classList.contains('cell')) {
                        const row = parseInt(e.target.dataset.row);
                        const col = parseInt(e.target.dataset.col);
                        this.selectCell(row, col);
                    }
                });

                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                grid.addEventListener('input', (e: any) => {
                    if (e.target.classList.contains('cell')) {
                        this.handleCellInput(e.target);
                    }
                });
            }

            const formulaInput = containerRef.current?.querySelector('#formulaInput') as HTMLInputElement;
            if (formulaInput) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                formulaInput.addEventListener('keydown', (e: any) => {
                    if (e.key === 'Enter') {
                        this.applyFormula();
                        e.preventDefault();
                    }
                });
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                formulaInput.addEventListener('input', (e: any) => {
                     setFormulaValue(e.target.value);
                });
            }
        }
        
        selectCell(row: number, col: number) {
            const prevRow = this.selectedCell.row;
            const prevCol = this.selectedCell.col;
            this.selectedCell = { row, col };
            
            const cell = containerRef.current?.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`) as HTMLElement;
            const prevCell = containerRef.current?.querySelector(`.cell[data-row="${prevRow}"][data-col="${prevCol}"]`) as HTMLElement;
            
            if (prevCell) prevCell.classList.remove('selected');
            if (cell) {
                cell.classList.add('selected');
                const addr = cell.dataset.address || '';
                setActiveCell(addr);
                
                const cellId = `${row},${col}`;
                const cellData = this.data.get(cellId);
                
                const val = cellData?.formula || cellData?.rawValue || cell.textContent || '';
                setFormulaValue(val);
                
                cell.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
            }
        }
        
        handleCellInput(cell: HTMLElement) {
            const row = parseInt(cell.dataset.row || '0');
            const col = parseInt(cell.dataset.col || '0');
            const cellId = `${row},${col}`;
            const value = cell.textContent?.trim() || '';
            
            if (value === '') {
                this.data.delete(cellId);
                cell.classList.remove('formula', 'error');
            } else {
                const isFormula = value.startsWith('=');
                
                const newCellData: CellData = {
                    rawValue: value,
                    displayValue: value,
                    formula: isFormula ? value : null,
                    isFormula: isFormula
                };
                
                this.data.set(cellId, newCellData);
                
                if (isFormula) {
                    this.evaluateFormula(cellId, value);
                    cell.classList.add('formula');
                } else {
                    cell.classList.remove('formula', 'error');
                }
            }
            
            this.updateDependencies(cellId);
            setFormulaValue(value);
            this.generateSystemMessage(); // Trigger update
        }
        
        evaluateFormula(cellId: string, formula: string) {
            try {
                let expression = formula.substring(1).toUpperCase();
                
                // Replace cell references
                expression = expression.replace(/[A-Z]+\d+/g, (match) => {
                    const cellRef = this.getCellCoordinates(match);
                    if (cellRef) {
                        const refCellId = `${cellRef.row},${cellRef.col}`;
                        const refData = this.data.get(refCellId);
                        const value = refData?.displayValue || 0;
                        const numVal = isNaN(parseFloat(String(value))) ? 0 : parseFloat(String(value));
                        return String(numVal);
                    }
                    return '0';
                });
                
                // Functions
                expression = expression.replace(/SUM\(([^)]+)\)/g, (_, range) => String(this.evaluateSum(range)));
                expression = expression.replace(/AVG\(([^)]+)\)/gi, (_, range) => String(this.evaluateAverage(range)));
                
                // eslint-disable-next-line no-new-func
                const func = new Function('return ' + expression.replace(/[^0-9+\-*/().,\s]/g, ''));
                const result = func();
                
                const finalVal = (typeof result === 'number') ? Math.round(result * 100) / 100 : result;
                
                const cellData = this.data.get(cellId);
                if (cellData) {
                    cellData.displayValue = finalVal;
                    // Note: We don't update rawValue or formula here, just display
                }
                
                const [row, col] = cellId.split(',').map(Number);
                const cell = containerRef.current?.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
                if (cell) {
                    cell.textContent = String(finalVal);
                    cell.classList.remove('error');
                }
                
            } catch (error) {
                const cellData = this.data.get(cellId);
                if (cellData) cellData.displayValue = 'ERROR';
                
                const [row, col] = cellId.split(',').map(Number);
                const cell = containerRef.current?.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
                if (cell) {
                    cell.textContent = 'ERROR';
                    cell.classList.add('error');
                }
            }
        }
        
        evaluateSum(range: string) {
            const cells = this.getCellsInRange(range);
            let sum = 0;
            cells.forEach(cid => {
                const val = parseFloat(String(this.data.get(cid)?.displayValue));
                if (!isNaN(val)) sum += val;
            });
            return sum;
        }

        evaluateAverage(range: string) {
            const cells = this.getCellsInRange(range);
            let sum = 0, count = 0;
            cells.forEach(cid => {
                const val = parseFloat(String(this.data.get(cid)?.displayValue));
                if (!isNaN(val)) { sum += val; count++; }
            });
            return count > 0 ? sum / count : 0;
        }

        getCellsInRange(range: string) {
            const parts = range.split(':');
            if (parts.length !== 2) return [];
            const start = this.getCellCoordinates(parts[0]);
            const end = this.getCellCoordinates(parts[1]);
            if (!start || !end) return [];
            
            const cells = [];
            for (let r = Math.min(start.row, end.row); r <= Math.max(start.row, end.row); r++) {
                for (let c = Math.min(start.col, end.col); c <= Math.max(start.col, end.col); c++) {
                    cells.push(`${r},${c}`);
                }
            }
            return cells;
        }

        getCellCoordinates(address: string) {
            const match = address.match(/^([A-Z]+)(\d+)$/i);
            if (!match) return null;
            const colStr = match[1].toUpperCase();
            const row = parseInt(match[2]) - 1;
            let col = 0;
            for (let i = 0; i < colStr.length; i++) {
                col = col * 26 + (colStr.charCodeAt(i) - 64);
            }
            return { row, col: col - 1 };
        }
        
        numberToColumn(num: number) {
            return String.fromCharCode(65 + num);
        }
        
        updateDependencies(changedCellId: string) {
            this.data.forEach((val, key) => {
                if (val.isFormula && val.formula) {
                    this.evaluateFormula(key, val.formula);
                }
            });
        }
        
        applyFormula() {
            const { row, col } = this.selectedCell;
            const cell = containerRef.current?.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`) as HTMLElement;
            if (cell) {
                cell.textContent = formulaValue;
                this.handleCellInput(cell);
            }
        }

        // Adapted from SystemMessageGenerator logic
        generateSystemMessage() {
            if (this.updateCallback) {
                if (this.data.size === 0) {
                    this.updateCallback("Sheet is empty");
                    return;
                }

                const cellDescriptions: string[] = [];
                
                // Sort keys to provide stable output order if possible, though Map order is insertion based
                // A sorted output (A1, A2, B1...) is easier for AI to parse
                const sortedKeys = Array.from(this.data.keys()).sort((a, b) => {
                     const [r1, c1] = a.split(',').map(Number);
                     const [r2, c2] = b.split(',').map(Number);
                     if (r1 !== r2) return r1 - r2;
                     return c1 - c2;
                });

                sortedKeys.forEach(key => {
                    const cellData = this.data.get(key);
                    if (!cellData) return;

                    const [r, c] = key.split(',').map(Number);
                    const address = `${this.numberToColumn(c)}${r + 1}`;
                    const value = cellData.displayValue;
                    const formula = cellData.formula;

                    if (formula) {
                        cellDescriptions.push(`${address}: ${value} (Formula: ${formula})`);
                    } else {
                        cellDescriptions.push(`${address}: ${value}`);
                    }
                });

                const message = cellDescriptions.join(', ');
                this.updateCallback(message);
            }
        }
    }

    const sheet = new MobileSpreadsheet(onUpdate);
    sheetRef.current = sheet;

    return () => {
        sheetRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (sheetRef.current) {
        sheetRef.current.updateCallback = onUpdate;
    }
  }, [onUpdate]);

  return (
    <div ref={containerRef} className="flex flex-col h-full bg-slate-50 text-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
        <style>{`
            :root {
                --cell-height: 32px;
                --cell-width: 100px;
                --header-bg: #f1f5f9;
                --border-color: #cbd5e1;
                --accent-color: #10b981;
            }
            .cell {
                border-right: 1px solid var(--border-color);
                border-bottom: 1px solid var(--border-color);
                padding: 4px 8px;
                font-family: 'Courier New', monospace;
                font-size: 14px;
                background-color: white;
                white-space: nowrap;
                overflow: hidden;
                min-width: var(--cell-width);
                min-height: var(--cell-height);
                outline: none;
            }
            .cell.selected {
                border: 2px solid var(--accent-color) !important;
                z-index: 10;
                background-color: #ecfdf5;
            }
            .column-header {
                min-width: var(--cell-width);
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--header-bg);
                border-right: 1px solid var(--border-color);
                border-bottom: 1px solid var(--border-color);
                font-weight: 600;
                font-size: 0.8rem;
                color: #64748b;
            }
            .row-header {
                min-width: 40px;
                height: var(--cell-height);
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--header-bg);
                border-right: 1px solid var(--border-color);
                border-bottom: 1px solid var(--border-color);
                font-weight: 600;
                font-size: 0.8rem;
                color: #64748b;
            }
            .corner-cell {
                min-width: 40px;
                height: 32px;
                background: var(--header-bg);
                border-right: 1px solid var(--border-color);
                border-bottom: 1px solid var(--border-color);
                position: sticky; top: 0; left: 0; z-index: 20;
            }
            .formula.cell { color: var(--accent-color); font-weight: 500; }
            .error.cell { background-color: #fee2e2; color: #ef4444; }
        `}</style>

        {/* Toolbar Header */}
        <div className="bg-white border-b border-slate-200 p-2 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
                <div className="bg-emerald-100 text-emerald-700 p-1.5 rounded-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h3 className="font-bold text-slate-700 text-sm">MobileCalc</h3>
            </div>
            <div className="flex items-center gap-2">
                 <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-xs font-medium border border-emerald-100">
                     <Eye className="w-3 h-3" />
                     <span className="hidden sm:inline">AI Tutor Monitoring</span>
                 </div>
                 <button onClick={onClose} className="hover:bg-slate-100 p-1.5 rounded-full text-slate-500">
                    <X className="w-5 h-5" />
                 </button>
            </div>
        </div>

        {/* Formula Bar */}
        <div className="bg-slate-50 border-b border-slate-200 p-2 flex gap-2 shrink-0">
            <div className="bg-white border border-slate-300 rounded px-2 py-1 text-xs font-mono font-bold flex items-center min-w-[3rem] justify-center text-slate-600">
                {activeCell}
            </div>
            <div className="flex-1 bg-white border border-slate-300 rounded flex items-center overflow-hidden">
                <span className="px-2 text-slate-400 font-serif italic border-r border-slate-100">fx</span>
                <input 
                    id="formulaInput"
                    type="text" 
                    value={formulaValue}
                    onChange={(e) => setFormulaValue(e.target.value)}
                    className="flex-1 px-2 py-1 text-sm outline-none font-mono text-slate-800"
                    placeholder="Type value or =A1+B2"
                />
            </div>
        </div>

        {/* Grid Container */}
        <div className="flex-1 overflow-auto bg-white relative">
            <div className="grid-wrapper inline-block">
                <div className="flex sticky top-0 z-10 shadow-sm">
                    <div className="corner-cell shrink-0"></div>
                    <div id="columnHeaders" className="flex"></div>
                </div>
                <div className="flex">
                    <div id="rowHeaders" className="flex flex-col sticky left-0 z-10 shadow-sm"></div>
                    <div id="spreadsheetGrid" className="grid"></div>
                </div>
            </div>
        </div>

        {/* Footer Status */}
        <div className="bg-slate-100 border-t border-slate-200 px-3 py-1.5 text-[10px] text-slate-500 flex justify-between shrink-0">
            <span>Ready</span>
            <span className="font-mono">Sheet1</span>
        </div>
    </div>
  );
};

export default SpreadsheetSimulation;
