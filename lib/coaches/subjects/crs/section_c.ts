import { StudentProfile } from '../../../types';

export const getSectionCInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'crs-birth') {
    return `${base}
**TOPIC: THE BIRTH AND EARLY LIFE OF JESUS**
**CONTENT:**
a) John, the forerunner of Jesus
b) The birth and boyhood of Jesus

**OBJECTIVES:**
Candidates should be able to:
i. compare the stories of the births of John and Jesus;
ii. assess the importance of John as the forerunner of Jesus;
iii. describe the boyhood of Jesus.
`;
  }
  if (topic === 'crs-baptism') {
    return `${base}
**TOPIC: THE BAPTISM AND TEMPTATION OF JESUS**
**CONTENT:**
(Mt. 3:13-17; 4:1-11; Mk. 1:9-13; Lk. 3:21-22; 4:1-13)

**OBJECTIVES:**
Candidates should be able to:
i. determine the meaning and purpose of the baptism of Jesus;
ii. enumerate the temptations of Jesus;
iii. examine the significance of the temptations of Jesus;
iv. describe how Jesus overcame the temptations.
`;
  }
  if (topic === 'crs-discipleship') {
    return `${base}
**TOPIC: DISCIPLESHIP**
**CONTENT:**
a) The call of the first disciples
b) The demands of discipleship

**OBJECTIVES:**
Candidates should be able to:
i. identify the first disciples to be called by Jesus;
ii. determine the demands of discipleship.
`;
  }
  if (topic === 'crs-miracles') {
    return `${base}
**TOPIC: MIRACLES**
**CONTENT:**
a) Nature miracles (Stilling storm, Feeding 5000, Walking on sea, Water to wine)
b) Miracles of resuscitation (Lazarus, Jairus' daughter, Widow's son)
c) Healing miracles (Lepers, Paralytic, Centurion's servant, Blind)

**OBJECTIVES:**
Candidates should be able to:
i. classify the different miracles of Jesus;
ii. indicate the occasion of each of the miracles;
iii. examine the significance of each of the miracles.
`;
  }
  if (topic === 'crs-parables') {
    return `${base}
**TOPIC: THE PARABLES**
**CONTENT:**
a) Parables of the kingdom (Sower, Weeds, Drag-net, Wedding garment)
b) Parables about love of God
c) Parables about love for one another
d) Parable about wealth (The rich fool)
e) Parables on prayer

**OBJECTIVES:**
Candidates should be able to:
i. define a parable;
ii. classify the different parables of Jesus;
iii. identify the occasion of each parable;
iv. interpret the meaning of each parable;
v. give reasons why Jesus taught in parables.
`;
  }
  if (topic === 'crs-sermon') {
    return `${base}
**TOPIC: SERMON ON THE MOUNT**
**CONTENT:**
(Mt.5;6; Lk.6:17-26)

**OBJECTIVES:**
Candidates should be able to:
i. analyse the teachings on the Mount;
ii. identify the demands of the Kingdom;
iii. determine the consequences of placing worldly possessions above heavenly treasures;
iv. associate the rewards for obedience with the Sermon on the Mount.
`;
  }
  if (topic === 'crs-mission') {
    return `${base}
**TOPIC: MISSION OF THE DISCIPLES**
**CONTENT:**
a) The mission of the twelve (Mt.10:5-15; Mk.6:7-13; Lk.9:1-16)
b) The mission of the seventy (Lk.10:1-24)

**OBJECTIVES:**
Candidates should be able to:
i. distinguish between the mission of the twelve and the seventy;
ii. specify the instructions to the disciples;
iii. assess the outcomes of the missions.
`;
  }
  if (topic === 'crs-confession') {
    return `${base}
**TOPIC: THE GREAT CONFESSION**
**CONTENT:**
(Mt.16:13-20; Mk.8:27-30; Lk.9:18-22)

**OBJECTIVES:**
Candidates should be able to:
i. analyse the confession by Peter;
ii. identify the occasion of the Great Confession;
iii. examine the significance of the Great Confession.
`;
  }
  if (topic === 'crs-transfiguration') {
    return `${base}
**TOPIC: THE TRANSFIGURATION**
**CONTENT:**
(Mt.17:1-13; Mk.9:2-13; Lk.9:28-36)

**OBJECTIVES:**
Candidates should be able to:
i. trace the events leading to the Transfiguration;
ii. identify the personalities involved in the Transfiguration account;
iii. determine the significance of the Transfiguration to the disciples.
`;
  }
  if (topic === 'crs-triumphal') {
    return `${base}
**TOPIC: THE TRIUMPHAL ENTRY AND THE CLEANSING OF THE TEMPLE**
**OBJECTIVES:**
Candidates should be able to:
i. recount the Triumphal Entry and the cleansing of the Temple;
ii. determine the significance of the Triumphal Entry and the cleansing of the Temple;
iii. examine how the cleansing of the Temple caused hostility towards Jesus.
`;
  }
  if (topic === 'crs-last-supper') {
    return `${base}
**TOPIC: THE LAST SUPPER**
**CONTENT:**
(Mt. 26:17-30; Mk. 14:10-26; Lk. 22:7-23; Jn. 13:2-38)

**OBJECTIVES:**
Candidates should be able to:
i. trace the story of the Last Supper;
ii. evaluate the significance of the Last Supper.
`;
  }
  if (topic === 'crs-trials') {
    return `${base}
**TOPIC: THE TRIALS, CRUCIFIXION, DEATH AND BURIAL OF JESUS**
**OBJECTIVES:**
Candidates should be able to:
i. analyse the different trials of Jesus;
ii. describe the crucifixion and burial of Jesus;
iii. deduce the lessons of the death of Jesus;
iv. recount the statements of Jesus on the cross.
`;
  }
  if (topic === 'crs-resurrection') {
    return `${base}
**TOPIC: THE RESURRECTION, APPEARANCES AND ASCENSION OF JESUS**
**OBJECTIVES:**
Candidates should be able to:
i. trace the stories of the resurrection, appearances and ascension of Jesus;
ii. compare the personalities involved in the stories;
iii. analyse the relevance of the resurrection, appearances and ascension of Jesus.
`;
  }
  if (topic === 'crs-teachings') {
    return `${base}
**TOPIC: JESUS’ TEACHINGS ABOUT HIMSELF**
**OBJECTIVES:**
Candidates should be able to:
i. analyse the different teachings of Jesus about Himself;
ii. deduce the reasons for Jesus' teachings about Himself;
iii. interpret the meanings of the symbols used by Jesus about Himself.
`;
  }
  if (topic === 'crs-love') {
    return `${base}
**TOPIC: LOVE**
**CONTENT:**
a) God's love for man (Jn.3:16-18)
b) Love for one another (Jn.13:34-35;15:12-13; 1 cor.13; cf. 1 Jn.4:7-21)

**OBJECTIVES:**
Candidates should be able to:
i. describe God's love for man;
ii. identify various types of love;
iii. specify the ways they can love one another;
iv. evaluate the significance of love.
`;
  }
  if (topic === 'crs-fellowship') {
    return `${base}
**TOPIC: FELLOWSHIP IN THE EARLY CHURCH**
**CONTENT:**
a) Communal living (Acts 1:15-26; 2:41-47; 4:32-37)
b) Problems of communal living and solutions (Acts 5:1-11, 6:1-6)

**OBJECTIVES:**
Candidates should be able to:
i. identify the reasons for communal living in the Early Church;
ii. identify the problems of communal living and their solutions;
iii. examine how communal living helped the growth of the Early Church.
`;
  }
  if (topic === 'crs-holy-spirit') {
    return `${base}
**TOPIC: THE HOLY SPIRIT AND THE MISSION OF THE CHURCH**
**CONTENT:**
a) The Pentecost (Acts 1:8; 2:1-41)
b) The mission of the Church (Acts 8:4-40)

**OBJECTIVES:**
Candidates should be able to:
i. trace the story of the Pentecost;
ii. identify the signs associated with the coming of the Holy Spirit;
iii. examine the significance of the Pentecost experience;
iv. analyse the mission of the Church.
`;
  }
  if (topic === 'crs-opposition') {
    return `${base}
**TOPIC: OPPOSITION TO THE GOSPEL MESSAGE**
**CONTENT:**
a) The arrest and imprisonment of Peter and John
b) The martyrdom of Stephen
c) Persecution by Saul
d) Persecution of Paul

**OBJECTIVES:**
Candidates should be able to:
i. trace the story of the arrest and imprisonment of Peter and John;
ii. trace the events that led to the martyrdom of Stephen;
iii. describe the role of Saul in the persecution of the Church;
iv. evaluate the importance of persecution to the growth of the Church;
v. account for the persecution of Paul.
`;
  }
  if (topic === 'crs-gentiles') {
    return `${base}
**TOPIC: MISSION TO THE GENTILES**
**CONTENT:**
a) Conversion of Saul
b) Conversion of Cornelius
c) The commissioning and mission of Paul
d) The Council of Jerusalem

**OBJECTIVES:**
Candidates should be able to:
i. compare the conversions of Saul and Cornelius;
ii. analyse the commissioning and mission of Paul;
iii. examine the main decisions at the Council of Jerusalem;
iv. identify the personalities involved at the Council of Jerusalem;
v. examine the relevance of the main decisions at the Council of Jerusalem;
vi. assess Paul's role in the mission to the Gentiles.
`;
  }
  return null;
};