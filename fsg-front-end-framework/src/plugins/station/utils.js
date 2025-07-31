
/**
 * 验证值是否是数字类型
 * @param {*} value
 * @returns {boolean}
 * */
export function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

/**
 * 验证是否是科学计数法表示的数字
 * */
export function isScientificNotation(num) {
    // 先转换为字符串
    const str = num.toString();
    // 使用正则表达式匹配科学计数法
    return /^[-+]?[0-9]*\.?[0-9]+[eE][-+]?[0-9]+$/.test(str);
}
