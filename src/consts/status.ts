export const STATUS = Object.freeze({
    CREATED: 1,
    FINISHED: 2,
    IN_PROGRESS: 3,
    CANCELED: 4,
} as const);

export type STATUS = typeof STATUS[keyof typeof STATUS];

export const translateStatus = (status: STATUS) => {
    const statusMap = {
        1: "Created",
        2: "Finished",
        3: "In Progress",
        4: "Canceled",
    };
    return statusMap[status];
};
