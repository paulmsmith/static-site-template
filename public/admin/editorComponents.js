// var CMS = CMS || undefined
// if (CMS) {

//   // I have left comments in on this initial editorComponent but documentation can
//   // also be found here:
//   //

//   // warning component
//   // https://design-system.service.gov.uk/components/warning-text/
//   CMS.registerEditorComponent({
//     // Internal id of the component
//     id: "details-component",
//     // Visible label
//     label: "Details component",
//     // Fields the user need to fill out when adding an instance of the component
//     fields: [
//       {
//         name: 'summaryText',
//         label: 'Summary text',
//         widget: 'string'
//       },
//       {
//         name: 'text',
//         label: 'Text',
//         widget: 'markdown'
//       }
//     ],
//     // Regex pattern used to search for instances of this block in the markdown document.
//     // Patterns are run in a multline environment (against the entire markdown document),
//     // and so generally should make use of the multiline flag (`m`). If you need to capture
//     // newlines in your capturing groups, you can either use something like
//     // `([\S\s]*)`, or you can additionally enable the "dot all" flag (`s`),
//     // which will cause `(.*)` to match newlines as well.
//     //
//     // Additionally, it's recommended that you use non-greedy capturing groups (e.g.
//     // `(.*?)` vs `(.*)`), especially if matching against newline characters.
//     pattern: /^{% govuk component="details", text="(.*?)", summaryText="(.*?)" %}$/ms,
//     // Given a RegExp Match object
//     // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match#return_value),
//     // return an object with one property for each field defined in `fields`.
//     //
//     // This is used to populate the custom widget in the markdown editor in the CMS.
//     fromBlock: function(match) {
//       return {
//         text: match[1],
//         summaryText: match[2]
//       };
//     },
//     // Given an object with one property for each field defined in `fields`,
//     // return the string you wish to be inserted into your markdown.
//     //
//     // This is used to serialize the data from the custom widget to the
//     // markdown document
//     toBlock: function(params) {
//       return `{% govuk component="details", text="${params.text}", summaryText="${params.summaryText}" %}`;
//     },
//     // Preview output for this component. Can either be a string or a React component
//     // (component gives better render performance)
//     toPreview: function(params) {
//       return `<details><summary>${params.summaryText ? params.summaryText : 'Summary text' }</summary>${params.text || ''}</details>`;
//     }
//   });

//   // https://design-system.service.gov.uk/components/inset-text/
//   CMS.registerEditorComponent({
//     id: "inset-text",
//     label: "Inset text component",
//     fields: [
//       {
//         name: 'text',
//         label: 'Text',
//         widget: 'markdown'
//       }
//     ],
//     pattern: /^{% govuk component="inset-text", text="(.*?)" %}$/ms,
//     fromBlock: function(match) {
//       return {
//         text: match[1]
//       };
//     },
//     toBlock: function(params) {
//       return `{% govuk component="inset-text", text="${params.text}" %}`;
//     },
//     toPreview: function(params) {
//       return `<div style="border-left: 5px solid #666; padding-left: 10px;">${params.text || ''}</div>`;
//     }
//   });

// }
