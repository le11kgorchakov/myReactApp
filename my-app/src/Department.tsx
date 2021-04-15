import { FunctionComponent } from 'react'

interface DepartmentProps
{
    deps: []
}

const Department: FunctionComponent = (props) =>
{
    const { deps } = props

    const refreshList = () =>
    {
        fetch(process.env.)
    }

    return (
        <div className="mt-5 d-flex justify-content-left">
            This is Department page
        </div>
    )
}
export default Department