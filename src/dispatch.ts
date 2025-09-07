type WorkOrder = {
  id: string;
  description: string;
};

type Technician = {
  id: string;
  activeJobs: WorkOrder[];
};

type DispatchExplanation = {
  technicianId: string;
  distance: number;
  skillMatch: number;
  currentLoad: number;
  score: number;
};

function calcDistance(_: Technician, __: WorkOrder): number {
  return Math.random() * 10; // placeholder
}

function matchSkills(_: Technician, __: WorkOrder): number {
  return Math.random(); // placeholder
}

function weightedScore(distance: number, skillMatch: number, load: number): number {
  return skillMatch * 2 - distance - load;
}

export function scoreTechnician(tech: Technician, job: WorkOrder): DispatchExplanation {
  return {
    technicianId: tech.id,
    distance: calcDistance(tech, job),
    skillMatch: matchSkills(tech, job),
    currentLoad: tech.activeJobs.length,
    score: weightedScore(
      calcDistance(tech, job),
      matchSkills(tech, job),
      tech.activeJobs.length
    ),
  };
}
