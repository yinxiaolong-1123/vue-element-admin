<template>
  <div class="hello">
    <Editor id="tinymce" v-model="content" :init="editorProps"></Editor>
  </div>
</template>

<script>
var useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
import Editor from '@tinymce/tinymce-vue';
import tinymce from 'tinymce/tinymce';
import 'tinymce/icons/default/icons.min.js'
import 'tinymce/themes/silver/theme';
import 'tinymce/icons/default/icons' //解决了icons.js 报错Unexpected token '<'
// 编辑器插件plugins
// 更多插件参考：https://www.tiny.cloud/docs/plugins/
import 'tinymce/plugins/image'// 插入上传图片插件
import 'tinymce/plugins/media'// 插入视频插件
import 'tinymce/plugins/table'// 插入表格插件
import 'tinymce/plugins/lists'// 列表插件
import 'tinymce/plugins/wordcount'// 字数统计插件
export default {
  name: 'HelloWorld',
  data() {
    return {
      editorProps: {
        content: '',
          width: 720,
          language_url: '/tinymce/langs/zh_CN.js',
          language: 'zh_CN',
          skin_url: '/tinymce/skins/ui/oxide',
          selector: 'textarea#full-featured',
          images_upload_handler: (blobInfo, success) => {
            const img = 'data:image/jpeg;base64,' + blobInfo.base64()
            success(img)
          },
          plugins: 'print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker imagetools textpattern noneditable help formatpainter permanentpen pageembed charmap tinycomments mentions quickbars linkchecker emoticons advtable',
          tinydrive_token_provider: 'URL_TO_YOUR_TOKEN_PROVIDER',
          tinydrive_dropbox_app_key: 'YOUR_DROPBOX_APP_KEY',
          tinydrive_google_drive_key: 'YOUR_GOOGLE_DRIVE_KEY',
          tinydrive_google_drive_client_id: 'YOUR_GOOGLE_DRIVE_CLIENT_ID',
          mobile: {
            plugins: 'print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker textpattern noneditable help formatpainter pageembed charmap mentions quickbars linkchecker emoticons advtable'
          },
          menu: {
            tc: {
              title: 'TinyComments',
              items: 'addcomment showcomments deleteallconversations'
            }
          },
          menubar: 'file edit view insert format tools table tc help',
          // toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
          autosave_ask_before_unload: true,
          autosave_interval: '30s',
          autosave_prefix: '{path}{query}-{id}-',
          autosave_restore_when_empty: false,
          autosave_retention: '2m',
          image_advtab: true,
          link_list: [
            { title: 'My page 1', value: 'https://www.tiny.cloud' },
            { title: 'My page 2', value: 'http://www.moxiecode.com' }
          ],
          image_list: [
            { title: 'My page 1', value: 'https://www.tiny.cloud' },
            { title: 'My page 2', value: 'http://www.moxiecode.com' }
          ],
          image_class_list: [
            { title: 'None', value: '' },
            { title: 'Some class', value: 'class-name' }
          ],
          importcss_append: true,
          templates: [
                { title: 'New Table', description: 'creates a new table', content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>' },
            { title: 'Starting my story', description: 'A cure for writers block', content: 'Once upon a time...' },
            { title: 'New list with dates', description: 'New List with dates', content: '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>' }
          ],
          template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
          template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
          height: 600,
          image_caption: true,
          quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
          noneditable_noneditable_class: 'mceNonEditable',
          toolbar_mode: 'sliding',
          spellchecker_ignore_list: ['Ephox', 'Moxiecode'],
          tinycomments_mode: 'embedded',
          content_style: '.mymention{ color: gray; }',
          contextmenu: 'link image imagetools table configurepermanentpen',
          a11y_advanced_options: true,
          skin: useDarkMode ? 'oxide-dark' : 'oxide',
          content_css: useDarkMode ? 'dark' : 'default',
          /*
          The following settings require more configuration than shown here.
          For information on configuring the mentions plugin, see:
          https://www.tiny.cloud/docs/plugins/premium/mentions/.
          */
          // mentions_selector: '.mymention',
          // mentions_fetch: mentions_fetch,
          // mentions_menu_hover: mentions_menu_hover,
          // mentions_menu_complete: mentions_menu_complete,
          // mentions_select: mentions_select,
          // mentions_item_type: 'profile',
          // menubar: false,
          statusbar: false,
          convert_urls: false,
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat',
         
        }
    } 
  },
  components: {
    Editor
  },
  mounted () {
    tinymce.init({})
  }
}
</script>

<style scoped>

</style>
