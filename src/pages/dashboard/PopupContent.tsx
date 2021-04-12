import QuantityEditor, { QuantityEditorProps } from '../../components/item/QuantityEditor'
import ItemCreator, { ItemCreatorProps } from '../../components/item/ItemCreator'


export type PopupContentType = 'editor' | 'creator' | 'operation' | 'none';

export interface PopupContentProps extends QuantityEditorProps, ItemCreatorProps {
    type: PopupContentType
}

function PopupContent(props: PopupContentProps) {
    if(props.type === 'editor') {
        return <div />
    } else if(props.type === 'operation') {
        return <QuantityEditor {...props} />
    } else if(props.type === 'creator') {
        return <ItemCreator {...props} />
    }
    return null;
}

export default PopupContent;