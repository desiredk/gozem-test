// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'

// import ActionsDialog from 'src/tracker/views/ui/actions/ActionsDialog'
import { Button, CardContent, CardHeader } from '@mui/material'
import DriverMoving from 'src/tracker/views/map/DriverMoving';
import CustomTextField from 'src/@core/components/mui/text-field';
import DeliveryService from 'src/tracker/logic/services/DeliveryService';
import { DeliveryType } from 'src/tracker/logic/models/Delivery';

import CustomChip from 'src/@core/components/mui/chip'

// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { formatDateTime } from 'src/tracker/logic/utils/constant';
import { ThemeColor } from 'src/@core/layouts/types';
import { customWebSocket } from 'src/configs/axios-config';
import { PositionType } from 'src/tracker/logic/models/Package';

interface UserStatusType {
  [key: string]: ThemeColor
}

const statusObj: UserStatusType = {
  open: 'secondary',
  'picked-up': 'info',
  'in-transit': 'warning',
  delivered: 'success',
  failed: 'error'
}

const statusObject: { [key: string]: string } = {
  open: 'Open',
  'picked-up': 'Picked Up',
  'in-transit': 'In Transit',
  delivered: 'Delivered',
  failed: 'Failed'
}

const deliveryService = new DeliveryService();

const RejectedFilesMSAList = () => {
  // const [connected, setConnected] = useState(false);
  const [deliveryId, setDeliveryId] = useState<string>('65ede1920a29450099c75566');
  const [delivery, setDelivery] = useState<DeliveryType>();

  const getOnDelivery = async (id: string) => {
    const rep = await deliveryService.get(id);

    setDelivery(rep)
  }

  const changeLocation = (position: PositionType) => {
    const data = {
      event: 'location_changed',
      delivery_id: deliveryId,
      location: position
    }

    customWebSocket.send(JSON.stringify(data));
  }

  const initWebSocket = async () => {
    try {
      customWebSocket.onopen = () => {
        // setConnected(true);
        console.log('WebSocket connection opened');
      };

      customWebSocket.onmessage = (event) => {
        const message = JSON.parse(event.data);

        setDelivery(message['delivery_object']);

        console.log('Received message:', message);
      };

      customWebSocket.onclose = () => {
        // setConnected(false);
        console.log('WebSocket connection closed');
      };

      customWebSocket.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
    } catch (error) {
      console.error('WebSocket connection error:', error);
    }

    console.log(" Je suis dedans ..................... ")
  };

  useEffect(() => {
    initWebSocket()
  }, [])

  return (
    <Grid container spacing={6.5}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title={'Map'} />

          <CardContent>
            <Grid container spacing={6}>
              <Grid item lg={10} md={10} sm={10} xs={8}>
                <CustomTextField
                  fullWidth
                  value={deliveryId}
                  sx={{ mb: 4 }}
                  onChange={e => {
                    setDeliveryId(e.target.value)
                  }}
                  placeholder='Enter Delivery ID'
                />
              </Grid>
              <Grid item lg={2} md={2} sm={2} xs={4}>
                <Button
                  variant='contained'
                  sx={{ width: '100%' }}
                  color='success'
                  onClick={() => {
                    getOnDelivery(deliveryId)
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>

            <Grid container spacing={6}>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                    <Typography
                      noWrap
                      sx={{
                        mb: 3,
                        fontWeight: 900,
                        textDecoration: 'none',
                        color: 'black'
                      }}
                    >
                      Package Details
                    </Typography>

                    <Typography
                      noWrap
                      sx={{
                        mb: 1,
                        fontWeight: 500,
                        textDecoration: 'none',
                        color: 'warning.main'
                      }}
                    >
                      To Name : { delivery?.package.to_name }
                    </Typography>

                    <Typography noWrap variant='body2' sx={{  mb: 1, color: 'secondary.main' }}>
                      To Address : { delivery?.package.to_address }
                    </Typography>

                    <Typography
                      noWrap
                      sx={{
                        mb: 1,
                        fontWeight: 500,
                        textDecoration: 'none',
                        color: 'warning.main'
                      }}
                    >
                      From Name : { delivery?.package.from_name }
                    </Typography>

                    <Typography noWrap variant='body2' sx={{  mb: 1, color: 'secondary.main' }}>
                      From Address : { delivery?.package.from_address }
                    </Typography>


                    <Typography noWrap variant='body2' sx={{  mb: 1, color: 'black' }}>
                      Weight : { delivery?.package.weight }
                    </Typography>

                    <Typography noWrap variant='body2' sx={{  mb: 1, color: 'black' }}>
                      Width : { delivery?.package.width }
                    </Typography>

                    <Typography noWrap variant='body2' sx={{  mb: 1, color: 'black' }}>
                      Height : { delivery?.package.height }
                    </Typography>

                    <Typography noWrap variant='body2' sx={{  mb: 1, color: 'black' }}>
                      Depth : { delivery?.package.depth }
                    </Typography>

                    <Typography noWrap variant='body2' sx={{  mb: 1, color: 'black' }}>
                      Description : { delivery?.package.description }
                    </Typography>

                    <Typography
                      noWrap
                      sx={{
                        mt: 6,
                        mb: 3,
                        fontWeight: 900,
                        textDecoration: 'none',
                        color: 'black'
                      }}
                    >
                      Delivery Details
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
                        label={statusObject[delivery?.status ?? 'open'] as string}
                        color={statusObj[delivery?.status ?? 'open']}
                        sx={{ textTransform: 'capitalize' }}
                      />
                    </Typography>

                    {delivery?.pickup_time && <Typography noWrap variant='body2' sx={{  mb: 1, color: 'warning.main' }}>
                      Pickup time : { formatDateTime(delivery?.pickup_time) }
                    </Typography>}

                    {delivery?.start_time && <Typography noWrap variant='body2' sx={{  mb: 1, color: '#00008b' }}>
                      Start time : { formatDateTime(delivery?.start_time) }
                    </Typography>}

                    {delivery?.end_time && <Typography noWrap variant='body2' sx={{  mb: 1, color: 'success.main' }}>
                      End time : { formatDateTime(delivery?.end_time) }
                    </Typography>}

                  </Box>
                </Box>
              </Grid>

              <Grid item lg={8} md={8} sm={12} xs={12}>
                {delivery?.package.from_location && <DriverMoving
                  position1={delivery?.package.from_location}
                  position2={delivery?.package.to_location}
                  changeLocation={changeLocation}
                  canChangeLocation={false}
                  realTimeDriverPosition={delivery?.location}
                />}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default RejectedFilesMSAList
