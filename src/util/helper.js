// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Radon, W3D3, the topic for today is Nodejs module system’
	
	// Call all these functions in route.js inside the test-me route handler 

    let today = new Date()
    function helper(){

        console.log("Date:"+today.getDate());
        console.log("Month:"+today.getMonth());
        console.log("year:"+today.getFullYear());

    }
    let getinfo = {
        name : "Lithium",
        week : "W3D6",
        topic : "basic of node.js and how to export module"
    }
        function getBatch(){
            console.log(getinfo.name);
            console.log(getinfo.week);
            console.log(getinfo.topic);

        
    }


    module.exports.radhe = helper
    module.exports.Krishna = getBatch