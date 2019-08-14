import { CssBaseline, Toolbar } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import DefaultHeaderOrganism from '../../organisms/DefaultHeaderOrganism'
import DefaultLeftMenuOrganism from '../../organisms/DefaultLeftMenuOrganism'
import DefaultFooterOrganism from '../../organisms/DefaultFooterOrganism'

export type Props = {
  title?: string,
  children?: React.ReactNode,
}

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    flexGrow: 1,
  },
}));

const Component: React.FC<Props> = (props: Props) => {
  const classes = useStyles('')

  return (
    <div>
      <CssBaseline />
      <DefaultHeaderOrganism title={props.title} />
      <DefaultLeftMenuOrganism />
      <Toolbar />
      <main className={classes.content}>
        {props.children}
      </main>
      <DefaultFooterOrganism />
    </div>
  )
}

export default Component
