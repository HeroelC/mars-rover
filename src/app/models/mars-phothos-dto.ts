export interface MarsPhotosDTO {
    camera: Camera;
    earth_date: string;
    id: number;
    img_src: string;
    sol: number;
    rover: Rover;
}

interface Camera {
    full_name: string;
    id: number;
    name: string;
    rover_id: number;
}

interface Rover {
    id: Number;
    landing_date: string;
    launch_date: string;
    name: string;
    status: string;
}