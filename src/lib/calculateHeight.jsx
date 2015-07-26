const HIDDEN_TEXTAREA_STYLE = [
  'height: 0',
  'visibility: hidden',
  'overflow: hidden',
  'position: absolute',
  'z-index: -1000',
  'top: 0',
  'right: 0'
];

const STYLES = [
  'letter-spacing',
  'line-height',
  'padding-top',
  'padding-bottom',
  'padding-left',
  'padding-right',
  'font-family',
  'font-weight',
  'font-size',
  'text-transform',
  'width',
  'border-width',
  'box-sizing'
];

let shadowTextarea = null;

function getStyleInfo(textarea) {
  let computedStyle = window.getComputedStyle(textarea);
  let boxSizing = getPrefixedStyle(computedStyle, 'box-sizing');
  let heightAdjust = 0;
  if (boxSizing === 'border-box')
    heightAdjust += getStyleNumber(computedStyle, 'border-top-width') + getStyleNumber(computedStyle, 'border-bottom-width');
  else if (boxSizing === 'content-box')
    heightAdjust -= getStyleNumber(computedStyle, 'padding-top') + getStyleNumber(computedStyle, 'padding-bottom');
  return {
    styles: STYLES.map(name => `${name}:${computedStyle.getPropertyValue(name)}`),
    heightAdjust
  };
}

function getPrefixedStyle(computedStyle, name) {
  let prefix = ['-o-', '-ms-', '-moz-', '-webkit-', ''];
  let tmp;
  for (let i = prefix.length; i--;)
    if (tmp = computedStyle.getPropertyValue(prefix[i] + name))
      return tmp;
  return null;
}

function getStyleNumber(computedStyle, name) {
  return parseFloat(computedStyle.getPropertyValue(name));
}

function getSingleRowHeight(textarea) {
  let tmp = textarea.value;
  textarea.value = 'x';
  let result = textarea.scrollHeight;
  textarea.value = tmp;
  return result;
}

export default function calculateHeight(textarea, minRows, maxRows) {
  if (!shadowTextarea) document.body.appendChild(shadowTextarea = document.createElement('textarea'));
  let {
    styles,
    heightAdjust
  } = getStyleInfo(textarea);
  shadowTextarea.setAttribute('style', styles.concat(HIDDEN_TEXTAREA_STYLE).join(';'));
  shadowTextarea.value = textarea.value;
  let height = shadowTextarea.scrollHeight + heightAdjust;
  let minHeight = -Infinity;
  let maxHeight = Infinity;

  if (minRows !== null || maxRows !== null) {
    let singleRowHeight = getSingleRowHeight(shadowTextarea) + heightAdjust;
    console.log(singleRowHeight, heightAdjust);
    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;
      height = Math.max(minHeight, height);
    }
    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;
      height = Math.min(maxHeight, height);
    }
  }

  console.log(height, maxHeight, minHeight);
  return {
    height, minHeight, maxHeight
  };
}
