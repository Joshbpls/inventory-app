import ItemEditor, { ItemEditorProps } from '../../components/item/ItemEditor'
import QuantityEditor, { QuantityEditorProps } from '../../components/item/QuantityEditor'


export type PopupContentType = 'editor' | 'creator' | 'operation' | 'none';

export interface PopupContentProps extends QuantityEditorProps, ItemEditorProps {
    type: PopupContentType
}

function PopupContent(props: PopupContentProps) {
    if(props.type === 'editor') {
        return <ItemEditor {...props} />
    } else if(props.type === 'operation') {
        return <QuantityEditor {...props} />
    }
    return null;
}

export default PopupContent;