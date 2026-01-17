import { StudentProfile } from '../../../types';

export const getSectionDInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'crs-justification') {
    return `${base}
**TOPIC: JUSTIFICATION BY FAITH**
**CONTENT:**
(Rom.3:21-24; 5:1-11; 10:1-13)

**OBJECTIVES:**
Candidates should be able to:
i. interpret the phrase 'justification by faith';
ii. identify the basic conditions for justification;
iii. determine the fruits of justification.
`;
  }
  if (topic === 'crs-law-grace') {
    return `${base}
**TOPIC: THE LAW AND GRACE**
**CONTENT:**
(Rom.4:13-25; 5:18-21; Gal.3:10-14; 19-29; Rom.3:24)

**OBJECTIVES:**
Candidates should be able to:
i. examine the purpose and significance of the law and grace;
ii. identify the place of the Law among the Jews.
`;
  }
  if (topic === 'crs-new-life') {
    return `${base}
**TOPIC: NEW LIFE IN CHRIST**
**CONTENT:**
(Rom.6:1-4; 12:1-2; 2 Cor.5:17; Gal.5:22-26; Col.3:1-17)

**OBJECTIVES:**
Candidates should be able to:
i. describe the characteristics of the old life;
ii. analyse the new life in Christ;
iii. identify the conditions of the new life;
iv. examine the benefits of the new life.
`;
  }
  if (topic === 'crs-joint-heirs') {
    return `${base}
**TOPIC: CHRISTIANS AS JOINT HEIRS WITH CHRIST**
**CONTENT:**
(Gal.3:23-29; 4:1-7)

**OBJECTIVES:**
Candidates should be able to:
i. describe how Christians are joint heirs with Christ;
ii. recognize that males and females are all children of God;
iii. indicate the benefits of being joint heirs with Christ.
`;
  }
  if (topic === 'crs-humility') {
    return `${base}
**TOPIC: HUMILITY**
**CONTENT:**
(Phil.2:1-11; 1 Pet.5:5-11)

**OBJECTIVES:**
Candidates should be able to:
i. determine the meaning of humility;
ii. identify the requirements of humility;
iii. identify the rewards of humility.
`;
  }
  if (topic === 'crs-forgiveness') {
    return `${base}
**TOPIC: FORGIVENESS**
**CONTENT:**
(Philemon; Matt.6:14-15; 18:21-35)

**OBJECTIVES:**
Candidates should be able to:
i. analyse Paul's teaching on forgiveness;
ii. assess the benefits of forgiveness;
iii. recognize the need to forgive others.
`;
  }
  if (topic === 'crs-spiritual-gifts') {
    return `${base}
**TOPIC: SPIRITUAL GIFTS**
**CONTENT:**
(1 Cor.12; Rom.12:3-8; cf. Eph.4:7-16)

**OBJECTIVES:**
Candidates should be able to:
i. identify the different spiritual gifts;
ii. analyse the benefits of spiritual gifts to the individual and the church;
iii. differentiate between spiritual gifts and talents.
`;
  }
  if (topic === 'crs-christian-giving') {
    return `${base}
**TOPIC: CHRISTIAN GIVING**
**CONTENT:**
(Phil.4:14-20; II Cor.8:1-5; 9; Cf. Matt 6:2-4)

**OBJECTIVES:**
Candidates should be able to:
(i) interpret the concept of Christian giving;
(ii) relate the teachings of Paul on Christian giving;
(iii) identify the importance of Christian giving.
`;
  }
  if (topic === 'crs-civic-responsibility') {
    return `${base}
**TOPIC: CIVIC RESPONSIBILITY**
**CONTENT:**
(Rom.13; I Tim. 2:1-4; 1 Peter 2:13-17)

**OBJECTIVES:**
Candidates should be able to:
(i) identify the need for obedience to authority;
(ii) specify the requirements of good citizenship.
`;
  }
  if (topic === 'crs-dignity-labour') {
    return `${base}
**TOPIC: DIGNITY OF LABOUR**
**CONTENT:**
(Matt.20:1-16; II Thess.3:6-15; Col.3:23-25)

**OBJECTIVES:**
Candidates should be able to:
(i) interpret the concept of dignity of labour;
(ii) analyse the benefits of labour;
(iii) recognize that no particular kind of work leads to loss of respect for personal dignity.
`;
  }
  if (topic === 'crs-second-coming') {
    return `${base}
**TOPIC: THE SECOND COMING OF CHRIST**
**CONTENT:**
a) The signs of the Coming of Christ (1 Thess.4:13-18; II Thess.2:1-12)
b) Preparation for His coming (Matt.25:31-46; I Thess.5:1-11; II Pet. 3:1-13)

**OBJECTIVES:**
Candidates should be able to:
(i) identify the signs of the Second Coming of Christ;
(ii) specify the preparations for His coming;
(iii) indicate what will happen during His Second Coming;
(iv) examine the importance of His coming.
`;
  }
  if (topic === 'crs-impartiality') {
    return `${base}
**TOPIC: IMPARTIALITY**
**CONTENT:**
(James 2:1-13; cf. Acts 10:34-35; Matt 7:1-5; Luke 6:31)

**OBJECTIVES:**
Candidates should be able to:
(i) interpret the concept of impartiality;
(ii) identify causes of partiality;
(iii) examine the consequences of partiality.
`;
  }
  if (topic === 'crs-effective-prayer') {
    return `${base}
**TOPIC: EFFECTIVE PRAYER**
**CONTENT:**
(James 1:2-8; 4:1-3; 5:13-18; cf. Matt 6:5-13)

**OBJECTIVES:**
Candidates should be able to:
(i) identify the requirements of effective prayer;
(ii) distinguish between effective and ineffective prayer;
(iii) identify the importance of prayer;
(iv) identify types of prayer.
`;
  }
  if (topic === 'crs-community-living') {
    return `${base}
**TOPIC: CHRISTIAN LIVING IN THE COMMUNITY**
**CONTENT:**
(a) Interpersonal relationships among Christians (I Pet.5:1-4; Rom.12:3-21; 2 Pet.1:3-11; Heb.13:1-21)
(b) Christians living among non-Christians (I Pet.2:3-25; Rom.15:1-2)
(c) Christian attitude to persecution (I Pet.1:5-9; 4:1-19; 1 Pet.3:13-22)
(d) Relationship in the Christian family (Eph.6:1-9; Col.3:18-21; I Pet.3:1-7)

**OBJECTIVES:**
Candidates should be able to:
(i) determine interpersonal relationships among Christians;
(ii) analyse Christian living among non-Christians;
(iii) relate Christian attitude to persecution;
(iv) determine the relationship in the Christian family;
(v) examine the importance of maintaining good relationships.
`;
  }
  if (topic === 'crs-corruption') {
    return `${base}
**TOPIC: CORRUPTION**
**CONTENT:**
(1 Tim 6:6-11; 2 Tim 3:8; 2 Pet. 1:4-11; James 5:1-6)

**OBJECTIVES:**
Candidates should be able to:
(i) define the term corruption;
(ii) identify the causes of corruption;
(iii) determine the effects and consequences of corruption;
(iv) identify ways of curbing corruption.
`;
  }
  if (topic === 'crs-sexual-immorality') {
    return `${base}
**TOPIC: SEXUAL IMMORALITY**
**CONTENT:**
(a) Prostitution (1 Cor.6:16-20; cf. Prov.7:10-27; 23:27-28)
(b) Adultery and Fornication (Heb.13:4; Eph.5:3-10; cf. Matt 5:28-32; Deut.22:22; Lev.20:10)
(c) Homosexuality (Rom.1:24-32; cf. Lev.18:21-30;20:13)

**OBJECTIVES:**
Candidates should be able to:
(i) identify what constitute sexual immorality;
(ii) determine the causes of sexual immorality;
(iii) examine the effects and consequences of sexual immorality;
(iv) identify ways of curbing sexual immorality.
`;
  }
  return null;
};