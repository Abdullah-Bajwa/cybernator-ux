import { redirect } from '@sveltejs/kit'

export const load = async({ locals }) => {
    if(locals.user){
        throw redirect(302, '/dashboard')
        console.log("dashboard")
    }else{
        throw redirect(302, '/login') 
        console.log("login")
    }
}