Permissions(): void{
    console.log("PermissionChecker loaded");
}




enum Rol{
    vip = 0,
    regular = 1,
    moderator = 2,
    admin = 3,
    staf = 4
}



export default class PermissionChecker {

    has_permission(role: Rol, permission: string): boolean{

        if (permission == "send_message") {
            if (role == Rol.vip || role == Rol.regular || role == Rol.moderator){
                return true;
            }
        }

        else if (permission == "read_message") {
            if (role == Rol.vip || role == Rol.regular || role == Rol.moderator){
                return true;
            }

        }

        else if (permission == "ban_membersuser") {
            if (role == Rol.moderator){
                return true;
            }
        }

        else if (permission == "acces_premium_content") {
            if (role == Rol.vip){
                return true;
            }
        }

        return false;

    }
}