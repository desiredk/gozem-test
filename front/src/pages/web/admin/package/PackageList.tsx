// ** React Imports
import { useState, useEffect, useCallback } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'

import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'

// ** Custom Table Components Imports
import TableHeader from './TableHeader'

import AddPackageDrawer from './AddPackageDrawer'

import { PackageType } from 'src/tracker/logic/models/Package'
import PackageService from 'src/tracker/logic/services/PackageService'

interface CellType {
  row: PackageType
}

const packageService = new PackageService()

const PackageList = () => {

  // ** State
  const [value, setValue] = useState<string>('')

  const [packages, setPackages] = useState<PackageType[]>([])

  const [addPackageOpen, setAddPackageOpen] = useState<boolean>(false)
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 5 })

  const getPackages = async () => {
    const rep = await packageService.list();

    const queryLowered = value.toLowerCase()
    let filteredData = [ ...rep ]

    if (queryLowered) {
      filteredData = (rep as PackageType[]).filter((pkg) => {

        return (
          pkg.description.toLowerCase().includes(queryLowered) ||

          `${pkg.weight}`.toLowerCase().includes(queryLowered) ||
          `${pkg.width}`.toLowerCase().includes(queryLowered) ||
          `${pkg.height}`.toLowerCase().includes(queryLowered) ||
          `${pkg.depth}`.toLowerCase().includes(queryLowered) ||

          pkg.from_name.toLowerCase().includes(queryLowered) ||
          pkg.from_address.toLowerCase().includes(queryLowered) ||
          pkg.to_name.toLowerCase().includes(queryLowered) ||
          pkg.to_address.toLowerCase().includes(queryLowered)
        )
      })
    }

    filteredData.reverse()

    setPackages(filteredData)
  }

  useEffect(() => {
    getPackages();
  }, [value])

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  const toggleAddPackageDrawer = () => setAddPackageOpen(!addPackageOpen)

  const handleCreatePackage = () => {
    toggleAddPackageDrawer()
  }

  return (
    <Grid container spacing={6.5}>
      {/* <ActionsDialog actionText={actionText} open={open} onClose={handleClose} onValid={handleValid} /> */}
      <Grid item xs={12}>
        <Card>
          {/* <CardHeader title={t('Search Filters')} /> */}
          <TableHeader value={value} handleFilter={handleFilter} toggle={handleCreatePackage} />
          <DataGrid
            autoHeight
            rowHeight={120}
            rows={packages as never[]}
            columns={[
              {
                flex: 0.25,
                minWidth: 200,
                field: 'from_name',
                renderHeader: () => (
                  <Typography
                    noWrap
                    sx={{
                      fontWeight: 500,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      fontSize: '0.8125rem'
                    }}
                  >
                    Departure informations

                    {/* Destination information */}
                  </Typography>
                ),
                renderCell: ({ row }: CellType) => {
                  const {
                    from_name,
                    from_address,
                    from_location
                  } = row

                  return (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                        <Typography
                          noWrap
                          sx={{
                            fontWeight: 500,
                            textDecoration: 'none',
                            color: 'primary.main'
                          }}
                        >
                          Name : { from_name }
                        </Typography>

                        <Typography noWrap variant='body2' sx={{ color: 'success.main' }}>
                          Address : { from_address }
                        </Typography>

                        <Typography noWrap variant='body2' sx={{ color: 'secondary.main' }}>
                          Latitude : { from_location.lat }
                        </Typography>

                        <Typography noWrap variant='body2' sx={{ color: 'info.main' }}>
                          Longitude : { from_location.lng }
                        </Typography>
                      </Box>
                    </Box>
                  )
                }
              },
              {
                flex: 0.25,
                minWidth: 200,
                field: 'to_name',
                renderHeader: () => (
                  <Typography
                    noWrap
                    sx={{
                      fontWeight: 500,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      fontSize: '0.8125rem'
                    }}
                  >
                    Destination informations
                  </Typography>
                ),
                renderCell: ({ row }: CellType) => {
                  const {
                    to_name,
                    to_address,
                    to_location
                  } = row

                  return (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                        <Typography
                          noWrap
                          sx={{
                            fontWeight: 500,
                            textDecoration: 'none',
                            color: 'primary.main'
                          }}
                        >
                          Name : { to_name }
                        </Typography>

                        <Typography noWrap variant='body2' sx={{ color: 'success.main' }}>
                          Address : { to_address }
                        </Typography>

                        <Typography noWrap variant='body2' sx={{ color: 'secondary.main' }}>
                          Latitude : { to_location.lat }
                        </Typography>

                        <Typography noWrap variant='body2' sx={{ color: 'info.main' }}>
                          Longitude : { to_location.lng }
                        </Typography>
                      </Box>
                    </Box>
                  )
                }
              },
              {
                flex: 0.25,
                minWidth: 200,
                field: 'name',
                renderHeader: () => (
                  <Typography
                    noWrap
                    sx={{
                      fontWeight: 500,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      fontSize: '0.8125rem'
                    }}
                  >
                    Package informations
                  </Typography>
                ),
                renderCell: ({ row }: CellType) => {
                  const {
                    description,
                    weight,
                    width,
                    height,
                    depth,
                  } = row

                  return (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                        <Typography
                          noWrap
                          sx={{
                            fontWeight: 500,
                            textDecoration: 'none'
                          }}
                        >
                          Weight : { weight }
                        </Typography>

                        <Typography noWrap variant='body2' sx={{ color: 'success.main' }}>
                          Width : { width }
                        </Typography>

                        <Typography noWrap variant='body2' sx={{ color: 'secondary.main' }}>
                          Height : { height }
                        </Typography>

                        <Typography noWrap variant='body2' sx={{ color: 'info.main' }}>
                          Depth : { depth }
                        </Typography>

                        <Typography noWrap variant='body2' sx={{ color: 'warning.main' }}>
                          Description : { description }
                        </Typography>
                      </Box>
                    </Box>
                  )
                }
              }
            ]}
            disableRowSelectionOnClick
            pageSizeOptions={[5, 25, 50]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
          />
        </Card>
      </Grid>

      {addPackageOpen && <AddPackageDrawer
        open={addPackageOpen}
        toggle={toggleAddPackageDrawer}
        onChange={getPackages}
      />}
    </Grid>
  )
}

export default PackageList
