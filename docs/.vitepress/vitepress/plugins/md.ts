import mdContainer from 'markdown-it-container';
import { highlight } from '../utils/highlight';
import renderDemoBlock from './render.ts';

export const blockPlugin = md => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        const content =
          tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
        return `<demo sourceCode="${md.utils.escapeHtml(content)}">${content ? `<!--vue-demo:${content}:vue-demo-->` : ''}`;
      }
      return '</demo>';
    }
  });
};
export const codePlugin = (md, options) => {
  const lang = options?.lang || 'vue';
  const defaultRender = md.renderer.rules.fence;
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    // 判断该 fence 是否在 :::demo 内
    const prevToken = tokens[idx - 1];
    const isInDemoContainer =
      prevToken &&
      prevToken.nesting === 1 &&
      prevToken.info.trim().match(/^demo\s*(.*)$/);
    if (token.info.trim() === lang && isInDemoContainer) {
      const m = prevToken.info.trim().match(/^demo\s*(.*)$/);
      const description = m && m.length > 1 ? m[1] : '';
      return `${
        description
          ? `<template #description>
        <p>${md.renderInline(description)}</p>
        </template>`
          : ''
      }<template #highlight>
      <div class="language-${lang}" style="margin: 0;border-radius:0;background-color:var(--vp-c-bg-alt);">
      ${highlight(token.content, lang)}
      </div>
      </template>`;
    }
    return defaultRender(tokens, idx, options, env, self);
  };
};

export const renderPlugin = (md, options = {}) => {
  const render = md.render;
  md.render = (...args) => {
    let result = render.call(md, ...args);
    const startTag = '<!--vue-demo:';
    const endTag = ':vue-demo-->';
    if (result.indexOf(startTag) !== -1 && result.indexOf(endTag) !== -1) {
    }
    const { template, script, style } = renderDemoBlock(result, options);
    result = template;
    // const data = md.__data
    // const hoistedTags = data?.hoistedTags || (data.hoistedTags = []);
    const data = md.__data || {};
    const hoistedTags = data?.hoistedTags || (data.hoistedTags = []);
    hoistedTags.push(script);
    hoistedTags.push(style);
    return result;
  };
};
