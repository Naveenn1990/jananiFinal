import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export const CkEditorComponent = () => {
  return (
    <div >

      <CKEditor
      editor={ClassicEditor}
      // data="<p>Hello from CKEditor 5</p>"    
      
      />
      {/* onReady ={editor => console.log ('editor is ready')}
      onChange ={(event, editor) => console.log(editor.getData())} */}
      
    </div>
  )
}
