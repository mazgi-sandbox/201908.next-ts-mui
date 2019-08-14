import { List, ListItem, ListItemIcon, ListItemText, Divider, makeStyles, Theme, Drawer } from '@material-ui/core'
import { Computer, Storage } from '@material-ui/icons'

export type Props = {
  open?: boolean,
  children?: React.ReactNode,
}

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    maxWidth: 250,
  },
}));

const Component: React.FC<Props> = (props: Props) => {
  const classes = useStyles('')

  return (
    <Drawer className={classes.drawer} open={true}>
      <List>
        <ListItem button key='vm'>
          <ListItemIcon><Computer /></ListItemIcon>
          <ListItemText primary='Virtual Machines' />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key='object-storage'>
          <ListItemIcon><Storage /></ListItemIcon>
          <ListItemText primary='Object Storages' />
        </ListItem>
      </List>
    </Drawer>
  )
}

Component.defaultProps = {
  open: false,
}

export default Component
