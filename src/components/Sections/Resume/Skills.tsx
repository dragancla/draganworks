import { FC, memo, PropsWithChildren, useMemo } from 'react';

import { Skill as SkillType, SkillGroup as SkillGroupType } from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{ skillGroup: SkillGroupType }>> = memo(({ skillGroup }) => {
  const { name, skills } = skillGroup;
  return (
    <div className="flex flex-col">
      <span className="text-left text-lg font-bold">{name}</span>
      <div className="flex flex-col gap-y-2">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{ skill: SkillType }> = memo(({ skill }) => {
  const { name, level, max = 10 } = skill;
  const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);
  const bubbleClass = level !== 0 ? 'h-1 w-full overflow-hidden rounded-full bg-neutral-300' : '';
  const listElement = level !== 0 ? 'ml-2 text-sm font-medium' : "before:content-['•'] ml-2 text-sm font-medium";

  return (
    <div className="flex flex-col">
      <span className={`${listElement}`}>&nbsp;{name}</span>
      <div className={`${bubbleClass}`}>
        <div className="h-full rounded-full bg-orange-400" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';
