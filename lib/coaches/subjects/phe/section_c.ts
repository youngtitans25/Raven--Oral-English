import { StudentProfile } from '../../../types';

export const getSectionCInstruction = (profile: StudentProfile, topic: string, base: string) => {
  if (topic === 'phe-athletics-track') {
    return `${base}
**TOPIC: ATHLETICS (TRACK EVENTS)**
**CONTENT:**
- Short distance/sprints: 50m, 100m, 200m, 400m.
- Start styles: Bullet/Bunch, Medium, Elongated.
- Relays: Visual and non-visual baton exchange, takeover zones.
- Hurdles: Flight, distancing in high and low hurdle events.
- Middle Distance: 800m, 1,500m (Start, Stride, Finish).
- Long Distance: 3,000m, 5,000m, 10,000m, Marathon, Cross-country.
- Rules, regulation, and officiating.

**OBJECTIVES:**
Candidates should be able to:
i. Name events making up sprint races;
ii. Identify starting styles;
iii. Differentiate visual and non-visual baton takeover;
iv. Explain relay takeover zones and hurdle clearance;
v. Describe start, stride, and finish in middle/long distance races;
vi. Differentiate rules, regulations, and officiating for track events.
`;
  }
  if (topic === 'phe-athletics-field') {
    return `${base}
**TOPIC: ATHLETICS (FIELD EVENTS)**
**CONTENT:**
- Throwing events: Discus, Javelin, Shotput (Facilities, Equipment, Styles, Rules, Safety).
- Jumping events: High jump, Long jump, Pole vault, Triple jump (Facilities, Equipment, Styles, Rules).

**OBJECTIVES:**
Candidates should be able to:
i. Name throwing and jumping events;
ii. Identify facilities, equipment, and specifications;
iii. Explain styles and techniques in throwing and jumping;
iv. Explain rules and regulations;
v. Discuss safety precautions in throwing events.
`;
  }
  if (topic === 'phe-ball-games') {
    return `${base}
**TOPIC: BALL GAMES (FOOTBALL & BASKETBALL)**
**CONTENT:**
- Skills in Football and Basketball.
- Facilities and equipment specifications.
- Rules, regulations, and officiating.

**OBJECTIVES:**
Candidates should be able to:
i. Describe skills in football and basketball;
ii. Identify facilities and equipment;
iii. Identify officials and their functions;
iv. Differentiate rules and regulations of football and basketball.
`;
  }
  if (topic === 'phe-racket-games') {
    return `${base}
**TOPIC: RACKET GAMES (TABLE TENNIS & BADMINTON)**
**CONTENT:**
- Skills in Table Tennis and Badminton.
- Facilities and equipment specifications.
- Rules, regulations, and officiating.

**OBJECTIVES:**
Candidates should be able to:
i. Describe skills in table tennis and badminton;
ii. Identify facilities and equipment;
iii. Identify officials and their functions;
iv. Differentiate rules and regulations of table tennis and badminton.
`;
  }
  return null;
};