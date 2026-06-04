export interface FormState {
    success: boolean;
    message: string;
    errors?: {
        name?: string[];
        email?: string[];
        company?: string[];
        message?: string[];
    }
};