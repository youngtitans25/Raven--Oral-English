import { StudentProfile } from '../../../types';

export const getSectionBInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'crs-greed') {
    return `${base}
**TOPIC: GREED AND ITS EFFECTS**
**CONTENT:**
a) Ahab (I Kings 21:1-29; 22:1-40; II Kings 9:30-37)
b) Gehazi (II Kings 5:1-27 cf. Josh 7)

**OBJECTIVES:**
Candidates should be able to:
i. deduce the meaning of greed;
ii. distinguish between Ahab and Gehazi's greed;
iii. analyse the consequences of Ahab and Gehazi's greed.
`;
  }
  if (topic === 'crs-supremacy') {
    return `${base}
**TOPIC: THE SUPREMACY OF GOD**
**CONTENT:**
Religious tension and the power of God on Mount Carmel (I Kings 16:29-34; 17:1-7; 18; 19:1-18)

**OBJECTIVES:**
Candidates should be able to:
i. assess the religious situation in Israel at the time of Elijah and Ahab;
ii. identify the characters involved in the contest on Mount Carmel;
iii. differentiate between God's power and that of Baal.
`;
  }
  if (topic === 'crs-reforms') {
    return `${base}
**TOPIC: RELIGIOUS REFORMS IN JUDAH**
**CONTENT:**
a) Cleansing of the Temple (II Kings 22)
b) Renewal of the Covenant (II Kings 23:1-30)

**OBJECTIVES:**
Candidates should be able to:
i. analyse Josiah's religious reforms;
ii. determine the reasons for the renewal of the covenant;
iii. assess the significance of the reforms.
`;
  }
  if (topic === 'crs-concern') {
    return `${base}
**TOPIC: CONCERN FOR JUDAH**
**CONTENT:**
a) The fall of Jerusalem (II kings 24; 25:1-17)
b) Condition of Judah (Neh. 1:1-11; Ezra 1:1-11)
c) Response to the state of Judah (Neh. 2; 4:1-23; Ezra 3:4; 5; 6; 7)

**OBJECTIVES:**
Candidates should be able to:
i. identify the reasons for the fall of Jerusalem;
ii. examine the condition of Judah during the exile;
iii. analyse the people's response to the call of Nehemiah and Ezra to rebuild Jerusalem;
iv. distinguish between Nehemiah and Ezra's responses to the opposition of their enemies.
`;
  }
  if (topic === 'crs-faith') {
    return `${base}
**TOPIC: FAITH, COURAGE AND PROTECTION**
**CONTENT:**
Examples of Daniel, Shadrach, Meshach and Abednego (Dan. 3:1-30; 6:1-28)

**OBJECTIVES:**
Candidates should be able to:
i. analyse the stories of Shadrach, Meshach, Abednego and Daniel;
ii. determine the occasions in which the four men demonstrated faith;
iii. analyse the effects of the faith of the four men on the Babylonians;
iv. identify the qualities of faith by four men worthy of emulation.
`;
  }
  if (topic === 'crs-jonah') {
    return `${base}
**TOPIC: GOD'S MESSAGE TO NINEVEH**
**CONTENT:**
Jonah and his message (Jonah 1; 2; 3 and 4)

**OBJECTIVES:**
Candidates should be able to:
i. analyse the story of Jonah's call;
ii. describe the consequences of Jonah's disobedience;
iii. assess the effect of Jonah's message on the Ninevites;
iv. emulate the example of the Ninevites.
`;
  }
  if (topic === 'crs-social-justice') {
    return `${base}
**TOPIC: SOCIAL JUSTICE, TRUE RELIGION AND DIVINE LOVE**
**CONTENT:**
a) Social justice and true religion (Amos 2:6-8; 4; 5:1-25; 6:1-14; 7:10-17; 8:4-14) cf. James 1:19-27
b) Divine love and human response (Hosea 1; 2; 3; 4; 6:1-11; 14)

**OBJECTIVES:**
Candidates should be able to:
i. determine what true religion is;
ii. identify the ills that led to the call for social justice in Amos' time;
iii. identify the punishment meted for evil deeds;
iv. examine the condition in Israel during Hosea's time;
v. analyse Hosea's portrayal of divine love and human response.
`;
  }
  if (topic === 'crs-holiness') {
    return `${base}
**TOPIC: HOLINESS AND DIVINE CALL**
**CONTENT:**
(Isaiah 6:1-13; Ezek. 2; 3:1-11; Jer. 1:4-10)

**OBJECTIVES:**
Candidates should be able to:
i. analyse the vision of Isaiah on God's holiness;
ii. distinguish the calls of Isaiah, Ezekiel and Jeremiah;
iii. compare the assignments given to these prophets;
iv. determine the need for God's people to be holy.
`;
  }
  if (topic === 'crs-punishment') {
    return `${base}
**TOPIC: PUNISHMENT AND HOPE**
**CONTENT:**
(Jer. 3:11-18; 32:26-35; Ezek. 18; 37:1-14; Isaiah 61; Jer. 4:5-8)

**OBJECTIVES:**
Candidates should be able to:
i. describe the situations that led to the punishment of Israel;
ii. identify the conditions for hope;
iii. determine the benefits of restoration.
`;
  }
  return null;
};