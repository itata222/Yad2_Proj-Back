import { createAdmin } from "./repositories/adminRepo";

const CreateAdmin = async (adminObj) => await createAdmin(adminObj);


export { CreateAdmin };