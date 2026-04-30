const slugify = (slug:string) => {
    return slug
        .normalize("NFKD")                  // normalize unicode
        .replace(/[\u2012-\u2015\u2212]/g,"-")      // fixed special dashes ( ---- )
        .replace(/[^\w\s-]/g, "")   // remove special characters
        .trim()                     // remove space sides
        .replace(/\s+/g,"-")        // replace space with - 
        .replace(/-+/g, "-")        // collapse mutliple dahses
        .toLowerCase()
}

export default slugify