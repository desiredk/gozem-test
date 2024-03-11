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

import AddDeliveryDrawer from './AddDeliveryDrawer'

import CustomChip from 'src/@core/components/mui/chip'

import { DeliveryType } from 'src/tracker/logic/models/Delivery'
import DeliveryService from 'src/tracker/logic/services/DeliveryService'
import { formatDateTime } from 'src/tracker/logic/utils/constant'
import { ThemeColor } from 'src/@core/layouts/types'

interface CellType {
  row: DeliveryType
}

interface UserStatusType {
  [key: string]: ThemeColor
}

const statusObj: UserStatusType = {
  open: 'success',
  'picked-up': 'warning',
  'in-transit': 'secondary',
  delivered: 'info',
  failed: 'primary'
}

const statusObject: { [key: string]: string } = {
  open: 'Open',
  'picked-up': 'Picked Up',
  'in-transit': 'In Transit',
  delivered: 'Delivered',
  failed: 'Failed'
}

const deliveryService = new DeliveryService()

const DeliveryList = () => {

  // ** State
  const [value, setValue] = useState<string>('')

  const [deliverys, setDeliverys] = useState<DeliveryType[]>([])

  const [addDeliveryOpen, setAddDeliveryOpen] = useState<boolean>(false)
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 5 })

  const getDeliverys = async () => {
    const rep = await deliveryService.list();

    const queryLowered = value.toLowerCase()
    let filteredData = [ ...rep ]

    if (queryLowered) {
      filteredData = (rep as DeliveryType[]).filter((delivery) => {

        return (
          `${delivery.pickup_time}`.toLowerCase().includes(queryLowered) ||
          `${delivery.start_time}`.toLowerCase().includes(queryLowered) ||
          `${delivery.end_time}`.toLowerCase().includes(queryLowered) ||

          delivery.status.toLowerCase().includes(queryLowered) ||

          delivery.package.description.toLowerCase().includes(queryLowered) ||

          `${delivery.package.weight}`.toLowerCase().includes(queryLowered) ||
          `${delivery.package.width}`.toLowerCase().includes(queryLowered) ||
          `${delivery.package.height}`.toLowerCase().includes(queryLowered) ||
          `${delivery.package.depth}`.toLowerCase().includes(queryLowered) ||

          delivery.package.from_name.toLowerCase().includes(queryLowered) ||
          delivery.package.from_address.toLowerCase().includes(queryLowered) ||
          delivery.package.to_name.toLowerCase().includes(queryLowered) ||
          delivery.package.to_address.toLowerCase().includes(queryLowered)
        )
      })
    }

    filteredData.reverse()

    setDeliverys(filteredData)
  }

  useEffect(() => {
    getDeliverys();
  }, [value])

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  const toggleAddDeliveryDrawer = () => setAddDeliveryOpen(!addDeliveryOpen)

  const handleCreateDelivery = () => {
    toggleAddDeliveryDrawer()
  }

  return (
    <Grid container spacing={6.5}>
      {/* <ActionsDialog actionText={actionText} open={open} onClose={handleClose} onValid={handleValid} /> */}
      <Grid item xs={12}>
        <Card>
          {/* <CardHeader title={t('Search Filters')} /> */}
          <TableHeader value={value} handleFilter={handleFilter} toggle={handleCreateDelivery} />
          <DataGrid
            autoHeight
            rowHeight={140}
            rows={deliverys as never[]}
            columns={[
              {
                flex: 0.25,
                minWidth: 330,
                field: 'status',
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
                    Deliveries informations
                  </Typography>
                ),
                renderCell: ({ row }: CellType) => {
                  const {
                    pickup_time,
                    start_time,
                    end_time,
                    location,
                    status,
                    id
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
                          Delivery ID : { id }
                        </Typography>

                        <Typography
                          noWrap
                          sx={{
                            fontWeight: 500,
                            textDecoration: 'none',
                            color: 'primary.main'
                          }}
                        >
                          Status : :
                          <CustomChip
                            rounded
                            skin='light'
                            size='small'
                            label={statusObject[status] as string}
                            color={statusObj[status]}
                            sx={{ textTransform: 'capitalize' }}
                          />
                        </Typography>

                        {pickup_time && <Typography noWrap variant='body2' sx={{ color: 'warning.main' }}>
                          Pickup time : { formatDateTime(pickup_time) }
                        </Typography>}

                        {start_time && <Typography noWrap variant='body2' sx={{ color: '#00008b' }}>
                          Start time : { formatDateTime(start_time) }
                        </Typography>}

                        {end_time && <Typography noWrap variant='body2' sx={{ color: 'success.main' }}>
                          End time : { formatDateTime(end_time) }
                        </Typography>}

                        {location.lat !== 0 && <Typography noWrap variant='body2' sx={{ color: '#4169e1' }}>
                          Latitude : { location.lat }
                        </Typography>}

                        {location.lng !== 0 && <Typography noWrap variant='body2' sx={{ color: 'info.main' }}>
                          Longitude : { location.lng }
                        </Typography>}
                      </Box>
                    </Box>
                  )
                }
              },
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
                  } = row.package

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
                  } = row.package

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
                    Delivery informations
                  </Typography>
                ),
                renderCell: ({ row }: CellType) => {
                  const {
                    description,
                    weight,
                    width,
                    height,
                    depth,
                  } = row.package

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

      {addDeliveryOpen && <AddDeliveryDrawer
        open={addDeliveryOpen}
        toggle={toggleAddDeliveryDrawer}
        onChange={getDeliverys}
      />}
    </Grid>
  )
}

export default DeliveryList
