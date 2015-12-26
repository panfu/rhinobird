class PostStore {
  constructor() {
    riot.observable(this);
  }
  // loadTemplateNames() {
  //   return new Promise((resolve, reject) => {
  //
  //   });
  // }
  // saveTemplateNames(template_names_str, cb) {
  //   this.tn.save({ content: template_names_str }, {
  //     success: (ntn) => {
  //       console.log('new ntn:', ntn);
  //       this.tn = ntn
  //       cb(ntn)
  //     }
  //   })
  // }
}

const instance = new PostStore();

// instance.on('posts_show', () => {
//   console.log('posts_show');
//   instance.loadTemplateNames().then((tn) => {
//     riot.control.trigger('template_names_show_done', tn.get('content') || '');
//   })
// })

riot.control.addStore(instance)
export default instance
