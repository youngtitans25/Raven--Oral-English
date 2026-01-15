
import React, { useState, useEffect, useRef } from 'react';
import { X, Info, Zap, Atom } from 'lucide-react';
import { Button } from '../ui/button';

// --- DATA CONSTANTS ---
const GROUPS_DATA: Record<number, any> = {
    1: {
        name: 'Alkali Metals',
        valenceCount: 1,
        accentColor: '#00ffaa',
        subtitle: 'All elements share 1 valence electron — watch ionization energy decrease!',
        insight: 'As you move <strong>down</strong> Group 1, atoms get larger with more electron shells. The valence electron is farther from the nucleus and easier to remove — that\'s why <strong>ionization energy decreases</strong>.',
        whyTitle: 'Why Does Ionization Energy Decrease?',
        whyItems: [
            { icon: '📏', text: '<strong>Increased distance:</strong> More shells mean the valence electron is farther from the positively charged nucleus.' },
            { icon: '🛡️', text: '<strong>Electron shielding:</strong> Inner electrons repel the valence electron and block the nucleus\'s pull.' },
            { icon: '⚡', text: '<strong>Less energy needed:</strong> The weaker attraction means less energy is required to remove the electron.' }
        ],
        elements: [
            { symbol: 'H', name: 'Hydrogen', number: 1, shells: [1], ie: 1312, config: '1' },
            { symbol: 'Li', name: 'Lithium', number: 3, shells: [2, 1], ie: 520, config: '2-1' },
            { symbol: 'Na', name: 'Sodium', number: 11, shells: [2, 8, 1], ie: 496, config: '2-8-1' },
            { symbol: 'K', name: 'Potassium', number: 19, shells: [2, 8, 8, 1], ie: 419, config: '2-8-8-1' },
            { symbol: 'Rb', name: 'Rubidium', number: 37, shells: [2, 8, 18, 8, 1], ie: 403, config: '2-8-18-8-1' },
            { symbol: 'Cs', name: 'Caesium', number: 55, shells: [2, 8, 18, 18, 8, 1], ie: 376, config: '2-8-18-18-8-1' },
            { symbol: 'Fr', name: 'Francium', number: 87, shells: [2, 8, 18, 32, 18, 8, 1], ie: 380, config: '2-8-18-32-18-8-1' }
        ]
    },
    2: {
        name: 'Alkaline Earth Metals',
        valenceCount: 2,
        accentColor: '#ff9f43',
        subtitle: 'All elements share 2 valence electrons — higher IE than Group 1!',
        insight: 'Group 2 elements have <strong>2 valence electrons</strong> and higher ionization energies than Group 1. The extra proton in the nucleus creates a stronger pull on the electrons, but IE still <strong>decreases down the group</strong> due to increasing atomic radius.',
        whyTitle: 'Why Is Group 2 IE Higher Than Group 1?',
        whyItems: [
            { icon: '🔋', text: '<strong>Extra proton:</strong> Group 2 atoms have one more proton than their Group 1 neighbors, creating stronger nuclear attraction.' },
            { icon: '📐', text: '<strong>Smaller radius:</strong> With the same number of shells but more protons, Group 2 atoms are slightly smaller.' },
            { icon: '📉', text: '<strong>Same trend:</strong> IE still decreases down the group as shells increase and shielding grows.' }
        ],
        elements: [
            { symbol: 'Be', name: 'Beryllium', number: 4, shells: [2, 2], ie: 900, config: '2-2' },
            { symbol: 'Mg', name: 'Magnesium', number: 12, shells: [2, 8, 2], ie: 738, config: '2-8-2' },
            { symbol: 'Ca', name: 'Calcium', number: 20, shells: [2, 8, 8, 2], ie: 590, config: '2-8-8-2' },
            { symbol: 'Sr', name: 'Strontium', number: 38, shells: [2, 8, 18, 8, 2], ie: 549, config: '2-8-18-8-2' },
            { symbol: 'Ba', name: 'Barium', number: 56, shells: [2, 8, 18, 18, 8, 2], ie: 503, config: '2-8-18-18-8-2' },
            { symbol: 'Ra', name: 'Radium', number: 88, shells: [2, 8, 18, 32, 18, 8, 2], ie: 509, config: '2-8-18-32-18-8-2' }
        ]
    },
    17: {
        name: 'Halogens',
        valenceCount: 7,
        accentColor: '#a55eea',
        subtitle: 'All elements have 7 valence electrons — very high ionization energies!',
        insight: 'Halogens have <strong>7 valence electrons</strong> and are just one electron away from a full shell. Their high <strong>effective nuclear charge</strong> creates strong attraction to the valence electrons, resulting in high ionization energies.',
        whyTitle: 'Why Do Halogens Have High IE?',
        whyItems: [
            { icon: '🧲', text: '<strong>High nuclear charge:</strong> With 17 protons (for Cl), the nucleus strongly attracts the 7 valence electrons.' },
            { icon: '🎯', text: '<strong>Nearly full shell:</strong> Halogens are one electron away from stability, so they hold their electrons tightly.' },
            { icon: '📉', text: '<strong>Decreasing trend:</strong> Despite high IE, the trend still decreases down the group due to larger atomic radius.' }
        ],
        elements: [
            { symbol: 'F', name: 'Fluorine', number: 9, shells: [2, 7], ie: 1681, config: '2-7' },
            { symbol: 'Cl', name: 'Chlorine', number: 17, shells: [2, 8, 7], ie: 1251, config: '2-8-7' },
            { symbol: 'Br', name: 'Bromine', number: 35, shells: [2, 8, 18, 7], ie: 1140, config: '2-8-18-7' },
            { symbol: 'I', name: 'Iodine', number: 53, shells: [2, 8, 18, 18, 7], ie: 1008, config: '2-8-18-18-7' },
            { symbol: 'At', name: 'Astatine', number: 85, shells: [2, 8, 18, 32, 18, 7], ie: 920, config: '2-8-18-32-18-7' }
        ]
    },
    18: {
        name: 'Noble Gases',
        valenceCount: 8,
        accentColor: '#45aaf2',
        subtitle: 'Full outer shells — extremely high ionization energies!',
        insight: 'Noble gases have <strong>complete valence shells</strong> (8 electrons, except He with 2). This makes them extremely stable and <strong>very difficult to ionize</strong>. They have the highest ionization energies in their respective periods.',
        whyTitle: 'Why Do Noble Gases Have the Highest IE?',
        whyItems: [
            { icon: '✨', text: '<strong>Full valence shell:</strong> With complete outer shells, there\'s no "easy" electron to remove.' },
            { icon: '💪', text: '<strong>Maximum stability:</strong> The electron configuration is at its most stable state possible.' },
            { icon: '🔒', text: '<strong>Strong hold:</strong> All valence electrons are tightly bound due to high effective nuclear charge.' }
        ],
        elements: [
            { symbol: 'He', name: 'Helium', number: 2, shells: [2], ie: 2372, config: '2' },
            { symbol: 'Ne', name: 'Neon', number: 10, shells: [2, 8], ie: 2081, config: '2-8' },
            { symbol: 'Ar', name: 'Argon', number: 18, shells: [2, 8, 8], ie: 1521, config: '2-8-8' },
            { symbol: 'Kr', name: 'Krypton', number: 36, shells: [2, 8, 18, 8], ie: 1351, config: '2-8-18-8' },
            { symbol: 'Xe', name: 'Xenon', number: 54, shells: [2, 8, 18, 18, 8], ie: 1170, config: '2-8-18-18-8' },
            { symbol: 'Rn', name: 'Radon', number: 86, shells: [2, 8, 18, 32, 18, 8], ie: 1037, config: '2-8-18-32-18-8' }
        ]
    }
};

const GLOBAL_MAX_IE = 2372;

// --- SUBCOMPONENTS ---

const BohrModel = ({ element, accentColor, removing }: { element: any, accentColor: string, removing: boolean }) => {
    const shellCount = element.shells.length;
    const baseRadius = 12;
    const shellSpacing = shellCount === 1 ? 0 : Math.min(14, 70 / shellCount);
    const maxRadius = baseRadius + shellCount * shellSpacing + 15;
    const size = maxRadius * 2 + 40;
    const cx = size / 2;
    const cy = size / 2;

    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
            {/* Nucleus */}
            <circle cx={cx} cy={cy} r="8" fill="#ff6b4a" />
            <text x={cx} y={cy + 3} textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">
                {element.number}+
            </text>

            {/* Shells */}
            {element.shells.map((electronCount: number, shellIndex: number) => {
                const isValenceShell = shellIndex === element.shells.length - 1;
                const radius = baseRadius + (shellIndex + 1) * shellSpacing;
                const orbitDuration = 3 + shellIndex * 0.8;
                const direction = shellIndex % 2 === 0 ? 1 : -1;

                return (
                    <React.Fragment key={shellIndex}>
                         <circle 
                            cx={cx} cy={cy} r={radius} 
                            fill="none" stroke="rgba(100, 140, 200, 0.3)" 
                            strokeWidth="1" strokeDasharray="3,3" 
                        />
                        {/* Electrons */}
                        {Array.from({ length: electronCount }).map((_, e) => {
                            const angle = (360 / electronCount) * e;
                            const rad = (angle * Math.PI) / 180;
                            const x = cx + radius * Math.cos(rad);
                            const y = cy + radius * Math.sin(rad);

                            return (
                                <g key={e} style={{ 
                                    transformOrigin: `${cx}px ${cy}px`,
                                    animation: `orbit ${orbitDuration}s linear infinite ${direction === -1 ? 'reverse' : 'normal'}`
                                }}>
                                    <circle
                                        cx={x} cy={y}
                                        r={isValenceShell ? 5 : 4}
                                        fill={isValenceShell ? accentColor : "#5588cc"}
                                        opacity={isValenceShell ? 1 : 0.8}
                                        className={isValenceShell && removing ? 'electron-removing' : ''}
                                        style={isValenceShell && removing ? {
                                            animation: `removeElectron 1s ease-out forwards`
                                        } : {}}
                                    />
                                </g>
                            )
                        })}
                    </React.Fragment>
                );
            })}
            
            <style>{`
                @keyframes orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes removeElectron {
                    0% { transform: translate(0, 0) scale(1); opacity: 1; }
                    100% { transform: translate(150px, -50px) scale(0.3); opacity: 0; }
                }
            `}</style>
        </svg>
    );
};

interface ElementRowProps {
    element: any;
    accentColor: string;
    globalMaxIE: number;
}

const ElementRow: React.FC<ElementRowProps> = ({ element, accentColor, globalMaxIE }) => {
    const [removing, setRemoving] = useState(false);
    const iePercent = (element.ie / globalMaxIE) * 100;
    
    // Calculate color based on IE
    let ieColor = '#2ed573';
    const ratio = element.ie / globalMaxIE;
    if (ratio > 0.6) ieColor = '#ff4757';
    else if (ratio > 0.35) ieColor = '#ffa502';

    const handleRemove = () => {
        setRemoving(true);
        setTimeout(() => setRemoving(false), 1500);
    };

    return (
        <div className="grid grid-cols-[70px_1fr] md:grid-cols-[80px_1fr_180px_100px] gap-4 items-center bg-slate-800/50 backdrop-blur-md rounded-xl p-4 border border-slate-700/50 hover:border-slate-500 transition-all hover:translate-x-1">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-2 text-center border-2 border-transparent" style={{ borderColor: accentColor }}>
                <div className="text-xs text-slate-400 absolute ml-1 mt-0.5">{element.number}</div>
                <div className="text-2xl font-bold font-mono text-white mt-1">{element.symbol}</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400">{element.name}</div>
            </div>

            <div className="flex justify-center md:justify-start">
                <div className="relative">
                    <BohrModel element={element} accentColor={accentColor} removing={removing} />
                    <div className="text-center text-xs font-mono text-slate-500 mt-[-10px]">{element.config}</div>
                </div>
            </div>

            <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
                <div className="text-xs font-mono text-slate-400">Ionization Energy</div>
                <div className="h-3 bg-slate-900 rounded-full overflow-hidden">
                    <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${iePercent}%`, backgroundColor: ieColor }}
                    ></div>
                </div>
                <div className="text-sm font-bold font-mono" style={{ color: ieColor }}>{element.ie} kJ/mol</div>
            </div>

            <div className="col-span-2 md:col-span-1 flex justify-center">
                 <Button 
                    onClick={handleRemove}
                    disabled={removing}
                    size="sm"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 font-bold"
                 >
                    {removing ? 'Ionizing...' : 'Remove e⁻'}
                 </Button>
            </div>
        </div>
    );
};

// --- MAIN SIMULATION COMPONENT ---

interface PeriodicTableSimulationProps {
    onClose: () => void;
}

const PeriodicTableSimulation: React.FC<PeriodicTableSimulationProps> = ({ onClose }) => {
    const [activeGroup, setActiveGroup] = useState(1);
    const groupData = GROUPS_DATA[activeGroup];

    // Scroll to top on mount
    useEffect(() => {
        const el = document.getElementById('sim-top');
        if(el) el.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <div id="sim-top" className="flex flex-col h-full bg-slate-950 text-slate-100 overflow-y-auto animate-in fade-in slide-in-from-bottom-8 duration-500">
            {/* Header / Nav */}
            <div className="sticky top-0 z-20 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 p-4">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                        <Atom className="text-emerald-400 w-5 h-5" />
                        <h2 className="font-bold text-lg md:text-xl text-white">Periodic Trends</h2>
                    </div>
                    <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-slate-800">
                        <X className="w-5 h-5" />
                    </Button>
                </div>

                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {[1, 2, 17, 18].map(g => (
                        <button
                            key={g}
                            onClick={() => setActiveGroup(g)}
                            className={`
                                flex flex-col items-center px-4 py-2 rounded-xl border-2 transition-all min-w-[100px]
                                ${activeGroup === g 
                                    ? `bg-slate-900 border-[${GROUPS_DATA[g].accentColor}] text-white shadow-[0_0_15px_rgba(0,255,170,0.1)]` 
                                    : 'bg-slate-900 border-transparent text-slate-500 hover:bg-slate-800'
                                }
                            `}
                            style={{ borderColor: activeGroup === g ? GROUPS_DATA[g].accentColor : 'transparent' }}
                        >
                            <span className="font-bold text-sm">Group {g}</span>
                            <span className="text-[10px] opacity-70 font-mono">{GROUPS_DATA[g].valenceCount} valence e⁻</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="p-4 md:p-6 space-y-8 max-w-4xl mx-auto w-full">
                {/* Title & Insight */}
                <div className="text-center space-y-2">
                    <h1 
                        className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400"
                        style={{ backgroundImage: `linear-gradient(135deg, ${groupData.accentColor}, #00ccff)` }}
                    >
                        {groupData.name}
                    </h1>
                    <p className="text-slate-400 text-sm md:text-base">{groupData.subtitle}</p>
                </div>

                <div className="bg-slate-900 border-l-4 p-4 md:p-6 rounded-r-xl" style={{ borderLeftColor: groupData.accentColor }}>
                    <h3 className="text-sm font-bold font-mono mb-2" style={{ color: groupData.accentColor }}>💡 KEY INSIGHT</h3>
                    <p className="text-sm md:text-base text-slate-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: groupData.insight }} />
                </div>

                {/* Elements List */}
                <div className="space-y-4">
                    {groupData.elements.map((el: any) => (
                        <ElementRow 
                            key={el.number} 
                            element={el} 
                            accentColor={groupData.accentColor} 
                            globalMaxIE={GLOBAL_MAX_IE} 
                        />
                    ))}
                </div>

                {/* Why Section */}
                <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                    <h2 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: groupData.accentColor }}>
                        <Info className="w-5 h-5" />
                        {groupData.whyTitle}
                    </h2>
                    <div className="grid gap-3">
                        {groupData.whyItems.map((item: any, i: number) => (
                            <div key={i} className="flex gap-3 p-3 bg-slate-950 rounded-xl items-start">
                                <span className="text-xl">{item.icon}</span>
                                <span className="text-sm text-slate-300" dangerouslySetInnerHTML={{ __html: item.text }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeriodicTableSimulation;