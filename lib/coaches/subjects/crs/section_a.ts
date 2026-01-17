import { StudentProfile } from '../../../types';

export const getSectionAInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'crs-sovereignty') {
    return `${base}
**TOPIC: THE SOVEREIGNTY OF GOD**
**OBJECTIVES:**
Candidates should be able to:
i. define the term 'sovereignty';
ii. analyse God's process of creation;
iii. interpret the sequence of creation;
iv. identify man's role in advancing God's purpose in creation;
v. recognize the sovereignty of God in the affairs of man and nations.
`;
  }
  if (topic === 'crs-covenant') {
    return `${base}
**TOPIC: THE COVENANT**
**CONTENT:**
a) The flood and God's covenant with Noah (Gen.6:1-22;7:1-24;9:1-17)
b) God's covenant with Abraham (Gen. 11:31-32; 12:1-9; 17:1-21; 21:1-13; 25:19-26)
c) God's covenant with Israel (Ex.19;20; 24:1-11) cf. Deut.28:1-19
d) The New Covenant (Jer.31:31-34; Ezek. 36:25-28)

**OBJECTIVES:**
Candidates should be able to:
i. explain the concept of covenant;
ii. examine the importance and implication of the covenants;
iii. distinguish between God's covenants with Noah, Abraham and Israel;
iv. Distinguish between the old and the new covenants.
`;
  }
  if (topic === 'crs-leadership') {
    return `${base}
**TOPIC: LEADERSHIP QUALITIES**
**CONTENT:**
a) Joseph (Gen.37:1-28;41:1-57;45:1-15)
b) Moses (Ex.1;2;3;4:1-17;5;12; Num. 13:1-20;14:1-19)
c) Joshua (Num.13:21-33;27:15-23; Josh. 1:1-15;6;7;24:1-31)
d) Judges (Deborah - Judges.4:1-24; Gideon: Judges 6:11-40; Samson: Judges 13:1-7,21-25;16:4-31)

**OBJECTIVES:**
Candidates should be able to:
i. examine the circumstances that gave rise to the leadership of Joseph, Moses, Joshua and the Judges;
ii. identify the major talents of these leaders;
iii. assess God's role in the works of these leaders;
iv. analyse the achievements of these leaders.
`;
  }
  if (topic === 'crs-providence') {
    return `${base}
**TOPIC: DIVINE PROVIDENCE, GUIDANCE AND PROTECTION**
**CONTENT:**
a) Guidance (Ex.13:17-22; Josh.8:1-22; Heb 1:1; Matt.11:27-30)
b) Protection (Ex.14:10-31; Dan 6:16-23; Ps.91)
c) Provision (Ex.16:1-21;17:1-7;13:20-22; 1Kgs 17:1-16; Num:20:1-13)

**OBJECTIVES:**
Candidates should be able to:
i. identify the different ways by which God guided and protected the people of Israel;
ii. specify how God provided for His people;
iii. identify the different occasions when God provided for Israel.
iv. recognize that God still provides for people today.
`;
  }
  if (topic === 'crs-parental') {
    return `${base}
**TOPIC: PARENTAL RESPONSIBILITY**
**CONTENT:**
a) Eli and Samuel (1 Sam.2:11-36;3:2-18; 4:10-22;8:15)
b) David (11 Sam.13;15:1-29;18;19:1-8)
c) Asa (1 Kings 15:9-15;22:41-44; cf. Deut. 6:4-9; Prov.4:1-10;13:1;24;22:6;23:13-14;31:10-31)

**OBJECTIVES:**
Candidates should be able to:
i. determine the extent to which Eli, Samuel and David were responsible for the short-comings of their children;
ii. describe how Asa pleased God.
`;
  }
  if (topic === 'crs-obedience') {
    return `${base}
**TOPIC: OBEDIENCE AND DISOBEDIENCE**
**CONTENT:**
(i) Obedience and Rewards: Abraham (Gen.22:1-19), Three Hebrew Youths (Dan.3:1-30), David (1 Sam.30:1-20)
(ii) Disobedience and Consequences: Adam (Gen.2:15-25;3), Collection of Manna (Ex.16:22-30), The Golden Calf (Ex.32)

**OBJECTIVES:**
Candidates should be able to:
i. determine why Abraham, the Three Hebrew Youths and David obeyed God;
ii. identify the rewards for obedience.
iii. compare the disobedience of Adam, the people of Israel, Moses and Saul;
iv. indicate the reasons for their disobedience;
v. identify the consequences of disobedience.
`;
  }
  if (topic === 'crs-david') {
    return `${base}
**TOPIC: A MAN AFTER GOD'S OWN HEART**
**CONTENT:**
a) The early life of David (1 Sam. 16:1-13; 17; 18:17-30; 22:1-5; 24:1-23; II Sam. 2:1-7; 3:1-39)
b) David's submission to the will of God (I Sam. 26:1-25, II Sam 12:15-25)
c) David's repentance and forgiveness (II Sam. 11; 12:1-15, cf. Ps. 51:130)

**OBJECTIVES:**
Candidates should be able to:
i. identify David's anointing experience;
ii. specify how David submitted to the will of God;
iii. examine the situations that led to David's sin and repentance;
iv. identify the consequences of David's sin;
v. identify why God forgave David.
`;
  }
  if (topic === 'crs-decision') {
    return `${base}
**TOPIC: DECISION - MAKING**
**CONTENT:**
a) Reliance on a medium (I Sam. 28:3-25)
b) The wisdom of Solomon (I Kings 3:3-28; 4:29-34; 5:1-12; 8:1-53)
c) Unwise policies of Solomon and Rehoboam (I Kings 9:15-23; 11:1-40; 12:1-20)

**OBJECTIVES:**
Candidates should be able to:
i. identify the source of Solomon's wisdom;
ii. compare the different ways used by Saul and Solomon in making decisions;
iii. analyse the decisions made by Saul, Solomon and Rehoboam;
iv. assess the consequences of Solomon and Rehoboam's unwise decisions.
`;
  }
  return null;
};