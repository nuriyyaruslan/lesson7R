import { Container,Grid,Box,Link } from '@mui/material';
import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncGallery } from '../../features/Gallery/gallerySlice';
import './Gallery.scss';

function Gallery() {

    const dispatch = useDispatch();
    const photos = useSelector(state => state.gallery.photos);

    useEffect(() => {
        dispatch(fetchAsyncGallery())
    },[dispatch])
    
    // console.log(photos)

  return (
    <Container maxWidth="lg" className="gallery-page">
        <Grid container spacing={2}>
            {
                photos.length ? 
                    photos.map(photo => 
                        photo.id < 30 ? 
                        <Grid item md={3} xs={12} key={photo.id}>
                            <Box className="gallery-cover">
                                <Box className="gallery-img">
                                    <Link href={photo.url}>
                                        <img src={photo.thumbnailUrl} title={photo.title} alt={photo.title}/>
                                    </Link>
                                </Box>
                                <p>{photo.title}</p>
                            </Box>
                        </Grid>
                        :null
                    )
                :null
            }
        </Grid>
    </Container>
  )
}

export default Gallery