import ResourceIndexTemplate from '../../components/templates/ResourceIndexTemplate'
import ObjectStorageListOrganism from '../../components/organisms/ObjectStorageListOrganism'
import ObjectStorage from '../../lib/resource/virtual/object-storage';

function createData() {
  const id = Math.random().toString(36).substring(6)
  const location = 'us-central-1'
  const tags = [
    'tag1', 'tag2'
  ]
  const obj = new ObjectStorage(id, location, tags)
  return obj
}

const rows = [
  createData(),
  createData(),
  createData(),
  createData(),
  createData(),
  createData(),
  createData(),
  createData(),
]

export default () => {
  return (
    <ResourceIndexTemplate title='Object Storages'>
      <ObjectStorageListOrganism rows={rows} />
    </ResourceIndexTemplate>
  )
}
