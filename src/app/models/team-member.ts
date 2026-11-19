export type Role = 'frontend' | 'backend' | 'data';
export type Status = 'on-leave' | 'left' | 'completed';
export interface TeamMember {
    readonly id: number;
    readonly name: string;
    role: Role;
    status: Status;
    email?: string;
    joined:string;
}
export type project = {
    id: number;
    title: string;
    objectives: string;
};