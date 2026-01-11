const flags = { pro: ["chat"] };

export const useFeature = f => flags.plan?.includes(f);
