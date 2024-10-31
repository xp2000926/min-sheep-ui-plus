import escapeHtml from 'escape-html';
import prism from 'prismjs';
import consola from 'consola';
import loadLanguages from 'prismjs/components/index';

const wrap = (code: string, lang: string): string => {
  if (lang === 'text') {
    code = escapeHtml(code);
  }
  return `<pre v-pre><code style="color: var(--vp-c-text-1)">${code}</code></pre>`;
};

export const highlight = (str: string, lang: string) => {
  if (!lang) {
    return wrap(str, 'text');
  }
  lang = lang.toLowerCase();
  const rawLang = lang;
  if (lang === 'vue' || lang === 'html') {
    lang = 'markup';
  }
  if (lang === 'md') {
    lang = 'markdown';
  }
  if (lang === 'ts') {
    lang = 'typescript';
  }
  if (lang === 'py') {
    lang = 'python';
  }
  if (!prism.languages[lang]) {
    try {
      loadLanguages([lang]);
    } catch {
      consola.warn(`[vitepress] 不支持${lang}语言的语法高亮显示。`);
    }
  }
  if (prism.languages[lang]) {
    const code = prism.highlight(str, prism.languages[lang], lang);
    return wrap(code, rawLang);
  }
  return wrap(str, 'text');
};
