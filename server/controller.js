

let gym_members = [
     {
        id: 1,
        first_name: "Gabe",
        last_name: "Fredrickson",
        email: "gabe@gmail.com",
        phone: 2084449898
    },
    {
        id: 2,
        first_name: "Sue",
        last_name: "Davis",
        email: "sue@gmail.com",
        phone: 2097093330
    },
    {
        id: 3,
        first_name: "Brian",
        last_name: "Oz",
        email: "Ozzy@gmail.com",
        phone: 2094330009
    },
    {
        id: 4,
        first_name: "Fracine",
        last_name: "Davis",
        email: "fran@gmail.com",
        phone: 2409092850
    },

];

let id = 0;

module.exports = {

    read: (req, res) => {
        res.status(200).send( gym_members );
    },

    read: ( req, res ) => {
        let gym_member = {};
        for( var i = 0; i < gym_members.length; i++ ){
            if( gym_members[i].first_name === req.params.first_name ){
                gym_member = {
                    id: gym_members[i].id,
                    first_name: gym_members[i].first_name,
                    last_name: gym_members[i].last_name,
                    email: gym_members[i].email,
                    phone: gym_members[i].phone
                }
            }
        }
        res.status( 200 ).send( gym_member );
    },

    create: ( req, res ) => {
        let { first_name, last_name, email, phone } = req.body;
        let gym_member = null;
        
        gym_member = {
            id: gym_members.length + 1,
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone: phone   
            } 
                
        gym_members.push( gym_member );
        res.status( 200 ).send( gym_members );
    }
    // update:
    // delete:



}