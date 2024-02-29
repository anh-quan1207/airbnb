export function createSlugFromName(name) {
    const from = "àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ";
    const to = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd";
    let updatedName = name.toLowerCase().split('').map((char, index) => {
        const indexInFrom = from.indexOf(char);
        return indexInFrom > -1 ? to[indexInFrom] : char;
    }).join('');

    return updatedName
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
}
