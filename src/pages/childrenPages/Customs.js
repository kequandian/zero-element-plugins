import PageGridContainer from '@/components/container/PageGridContainer';
import ComponentsList from '@/plugins/ComponentsList'

export default function () {  
    return <PageGridContainer title={"自定义组件"} subtitle={" · · · "}>
        <ComponentsList />
    </PageGridContainer>
}