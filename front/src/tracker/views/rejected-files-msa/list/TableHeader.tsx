// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// import Button from '@mui/material/Button'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
// import Icon from 'src/@core/components/icon'
import { t } from 'i18next'

interface TableHeaderProps {
  value: string
  toggle: () => void
  handleFilter: (val: string) => void
  download: () => void
  dateRangeInvalid: boolean
}

const TableHeader = (props: TableHeaderProps) => {
  // ** Props
  const { handleFilter, value, download, dateRangeInvalid } = props

  return (
    <Box
      sx={{
        py: 4,
        px: 6,
        rowGap: 2,
        columnGap: 4,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <CustomTextField
        value={value}
        sx={{ mr: 4 }}
        placeholder={t('Recherche ...') as string}
        onChange={e => handleFilter(e.target.value)}
      />
      {/* <Box sx={{ rowGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <Button onClick={toggle} variant='contained' sx={{ '& svg': { mr: 2 } }}>
          <Icon fontSize='1.125rem' icon='tabler:plus' />
          {t('Add a partner')}
        </Button>
      </Box> */}

      {!dateRangeInvalid && <Box sx={{ rowGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <ButtonGroup variant='contained'>
          <Button onClick={() => download()} color='success'>
            <Box sx={{ marginRight: 5 }}>
              <Icon fontSize='1.125rem' icon='tabler:file-spreadsheet' />
            </Box>
            Excel
          </Button>
          {/* <Button onClick={() => download()}>
            <Box sx={{ marginRight: 5 }}>
              <Icon fontSize='1.125rem' icon='tabler:pdf' />
            </Box>
            PDF{' '}
          </Button> */}
        </ButtonGroup>
      </Box>}
    </Box>
  )
}

export default TableHeader
