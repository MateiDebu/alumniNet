import {Pipe, PipeTransform} from '@angular/core'

@Pipe( 
    {
        name: 'usersFilter'
    }
)

export class FilterPipe implements PipeTransform{
    transform(users: any[],searchText:string):any[] {
        if(!users) return [];
        if(!searchText) return users;

        searchText =searchText.toLowerCase();

        return users.filter(user => {
            if(user.firstName.toLowerCase()===searchText.toLowerCase())
                return user.firstName.toLowerCase()===searchText.toLowerCase();
            else
            {
                if(user.lastName.toLowerCase()===searchText.toLowerCase())
                        return user.lastName.toLowerCase()===searchText.toLowerCase();
                    else
                    {
                        var fullName=user.firstName.toLowerCase()+' '+user.lastName.toLowerCase();
                        if(fullName===searchText.toLowerCase()){
                            return fullName===searchText.toLowerCase();
                        }
                    }
            }
            return ;

        });
    }
}