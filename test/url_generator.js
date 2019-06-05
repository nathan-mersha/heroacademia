/**
 * @author              Young Midoria
 * @name                heroAcademia
 * @module              url_generator
 * @description         Url generator for heroAcademia
 * @kind                Test
 * @copyright           Copyright : 2018
 */

const baseURL = `/heroAcademia`;

// Begin inserting routes url here
    const teacherRoute = `${baseURL}/teacher`;
    const studentRoute = `${baseURL}/student`;
    const tournamentRoute = `${baseURL}/tournament`;
    const historyRoute = `${baseURL}/history`;
// End inserting routes url here

module.exports = {
    // Begin inserting rest end points for routes here
        
            teacher : {
                create          : ()=> `${teacherRoute}`,
                findByIdPublic  : (id)=> `${teacherRoute}/?_id=${id}`,
                findByIdPrivate : (id)=> `${teacherRoute}/?_id=${id}&private=true`,
                findPaginated   : (query)=> `${teacherRoute}/?${query}`,
                update          : (query)=> `${teacherRoute}/?${query}`,
                remove          : (query)=> `${teacherRoute}/?${query}`
            },
            
    
            student : {
                create          : ()=> `${studentRoute}`,
                findByIdPublic  : (id)=> `${studentRoute}/?_id=${id}`,
                findByIdPrivate : (id)=> `${studentRoute}/?_id=${id}&private=true`,
                findPaginated   : (query)=> `${studentRoute}/?${query}`,
                update          : (query)=> `${studentRoute}/?${query}`,
                remove          : (query)=> `${studentRoute}/?${query}`
            },
            
    
            tournament : {
                create          : ()=> `${tournamentRoute}`,
                findByIdPublic  : (id)=> `${tournamentRoute}/?_id=${id}`,
                findByIdPrivate : (id)=> `${tournamentRoute}/?_id=${id}&private=true`,
                findPaginated   : (query)=> `${tournamentRoute}/?${query}`,
                update          : (query)=> `${tournamentRoute}/?${query}`,
                remove          : (query)=> `${tournamentRoute}/?${query}`
            },
            
    
            history : {
                create          : ()=> `${historyRoute}`,
                findByIdPublic  : (id)=> `${historyRoute}/?_id=${id}`,
                findByIdPrivate : (id)=> `${historyRoute}/?_id=${id}&private=true`,
                findPaginated   : (query)=> `${historyRoute}/?${query}`,
                update          : (query)=> `${historyRoute}/?${query}`,
                remove          : (query)=> `${historyRoute}/?${query}`
            },
            
// End inserting rest end points for routes here
};