import { Box } from '@material-ui/core'
import { Container } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { Link } from '@material-ui/core';

export default () => {
  return (
    <Grid>
      <Container>
        <Box>
          <Link href="/object-storage">Go to the index of Object Storage</Link>
        </Box>
      </Container>
    </Grid>
  )
}