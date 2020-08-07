const { subjects, weekdays, getSubject } = require('./utils/format');

function pageLanding(req, res) {
    // sem utilização de template engine
    // return res.sendFile(__dirname + "/views/index.html");

    //utilizando nunjucks
    return res.render("index.html");
}


function pageGiveClasses(req, res) {
    const data = req.query //faz a busca pelo name definido no html

    const isNotEmpty = Object.keys(data).length > 0;
    // se tiver dados (data)
    if (isNotEmpty) {

        data.subject = getSubject(data.subject);
        
        // adicionar dados a lista de profys
        proffys.push(data);
        
        return res.redirect('/study')
    };
    
    // se não, não adicionar
    return res.render("give-classes.html", { subjects, weekdays })
    
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses
}