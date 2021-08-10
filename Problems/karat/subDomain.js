//https://leetcode.com/problems/subdomain-visit-count/
const subDomain = (cpdomains) => {
    let map = {}
    for (let el of cpdomains) {
        const url = el.split(' ').map(e => e.trim());
        let num = parseInt(url[0]);
        let fullDomain = url[1];
        let middleDomain = '';
        let lastDomain = '';
        let domain = url[1].split('.')
        if (domain.length === 3) {
            middleDomain = domain[1] + '.' + domain[2];
            lastDomain = domain[2]
        } else if (domain.length === 2) {
            lastDomain = domain[1]
        }
        map[fullDomain] = (map[fullDomain] || 0) + num;
        if (middleDomain.length) {
            map[middleDomain] = (map[middleDomain] || 0) + num;
        }
        map[lastDomain] = (map[lastDomain] || 0) + num;
    }
    const result = []
    for (let dom in map) {
        result.push(map[dom] + ' ' + dom)
    }
    return result;
}
let e = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"];
console.log(subDomain(e));