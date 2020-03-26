import React, {useEffect, Component} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Link, Route } from 'react-router-dom';
import SideMenuNavBar from '../side-menu-nav-bar/SideMenuNavBar';
import Stepper from '../stepper/Stepper'
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import DialogJornalPreview from '../dialog-jornal-preview/DialogJornalPreview'

import {
    StyledAddButton,
    StyledButton, 
    StyledContainer, 
    StyledContainerImage, 
    StyledContainerIcon, 
    StyledScrollerContainer, 
    StyledFullContainer, 
    StyledProductCard,
    StyledFooterCreatorContainer,
    StyledContactInput,
    StyledButtonCreateJornal
} from './style';


export default function ProductChoice() {
    let products = JSON.parse(localStorage.getItem('products')|| "[]")
    let creditCards = JSON.parse(localStorage.getItem('credit-card')|| "[]")
    var defaultProps = {}
    defaultProps = {
        options: products,
        getOptionLabel: option => option.name,
        getOptionSelected: (option, value)=> {
            return option.name === value.name
            },
        };

    function getStyles(card, cardName, theme) {
        return {
            fontWeight:
            cardName.indexOf(card.name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
        };
        }
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
            },
        },
        };

    const useStyles = makeStyles(theme => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(0),
            width: theme.spacing(15),
            marginTop: theme.spacing(0),
            marginLeft: theme.spacing(4),
        },
        inputText: {
            width: theme.spacing(10),
            marginLeft: theme.spacing(10),
            marginTop: theme.spacing(1),
        },
        inputStyleFooter: {
            '& label' : {color: '#2267ff', fontWeight: '900'},
            '& *': {fontFamily: 'Comfortaa'}
        },
        chips: {
            display: 'flex',
            flexWrap: 'wrap',
          },
          chip: {
            margin: 2,
          },
        }));

    const theme = useTheme();
    const classes = useStyles();

    //  STATES:
    const [productsChosen, setProduct] = React.useState({
        id: '',
        product:'',
        price: '',
        image: '',
        unityType: ''
    });


    // ALERT SNACKS
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }
    
    
    const [openSnack, setOpenSnack] = React.useState(false);
    
    
    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
    
        setOpenSnack(false);
    };



    const [productsList, setProductList] = React.useState([])

    const [cardName, setCardName] = React.useState([]);

    const [showCreateJornal, setShowCreateJornal] = React.useState(false)

    const [showProductsWorkflow, setShowProductsWorkflow] = React.useState(true)

    const [showFooterWorkflow, setShowFooterWorkflow] = React.useState(false)

    const [showScroll, setShowScroll] = React.useState(false)

    const [controlCounterListProducts, setcontrolCounterListProducts] = React.useState(0)

    const [controlFormProductSubmit, setControlFormProductSubmit] = React.useState(false)

    const [snackAlertMessage, setSnackAlertMessage] = React.useState('')

    const [showDialog, setShowDialog] = React.useState(false)


    
    const inputLabel = React.useRef("demo-simple-select-label");
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
    
    const handleChangeUnityType = event => {
        setProduct({...productsChosen, unityType:event.target.value});
    };

    const handleChangeCard = (event, value) => {
        setCardName(event.target.value);
        setFooterChosen({...footerChosen, cardFlag:{...footerChosen.cardFlag, value: [...footerChosen.cardFlag.value, value.props.data]}})
      };

    const handleNextFooterWorkflow = event => {
        setShowFooterWorkflow(true)
        setShowProductsWorkflow(false)
        setShowCreateJornal(false)
    }

    const handleChangeProduct = (event, value) => {
        if(value) {
            console.log('VALOR',value)
            setProduct({...productsChosen, product: value.name, image: value.imageUrl[0], id: value._id})
            console.log('RESULTADO', productsChosen)
        }
    }

    //HOOKS STATE FOOTER

    const [footerChosen, setFooterChosen] = React.useState({
        contactNumber: {value:'', identifier: 'Contato', icon: 'perm_phone_msg'},
        whatsAppNumber:{value:'', identifier: 'WhatsApp', icon: 'perm_phone_msg'},
        address: {value:'', identifier: 'Endereço', icon: 'place'},
        extraInfo: {value:'', identifier: 'info', icon: 'store_mall_directory'},
        cardFlag: {value:'', identifier: 'cartoes', icon: 'credit_card'}
    });

    //FOOTER FORMS FUNCTIONS

    const handleChangeFooterContactFone = (event) => {
        console.log('T E L E F O N E ==>',event.target.value)
        setFooterChosen({...footerChosen, contactNumber: {...footerChosen.contactNumber, value: event.target.value}});
    }

    const handleChangeFooterContactWhatsapp = (event) => {
        console.log('ZAP ZAP ==>',event.target.value)
        setFooterChosen({...footerChosen, whatsAppNumber:{...footerChosen.whatsAppNumber, value: event.target.value}});
    }

    const handleChangeFooterAddress = (event) => {
        console.log(' E N D E R E Ç O ==>',event.target.value)
        setFooterChosen({...footerChosen, address:{...footerChosen.address, value: event.target.value}});    
    }

    const handleChangeFooterExtraInfo = (event) => {
        console.log('I F O R M A Ç A O   EXTRA ==>',event.target.value) 
        setFooterChosen({...footerChosen, extraInfo:{...footerChosen.extraInfo, value: event.target.value}}); 
    }
    //END FOOTER FORMS FUNCTIONS

    useEffect(() => {
        if(controlCounterListProducts > 0){setShowCreateJornal(true)}
        if(controlCounterListProducts < 1){setShowCreateJornal(false)}
    }, [controlCounterListProducts])

    const handleAddProductsSubmit = (event) => {
        let verifyForm = true
        for (var prop in productsChosen ) {
            if(!productsChosen[prop] === true) {console.log('DEU RUIM NO FORM'); verifyForm = false} 
            console.log('ficou faltando campo: ', productsChosen[prop] + 'bool  ' + typeof(!productsChosen[prop]))
        }
        console.log('HOOOK', verifyForm)
        if(verifyForm===false) {
            for (var prop in productsChosen ) { 
                setSnackAlertMessage('Favor preencher todos os campos')
                setOpenSnack(true)
            }
            
        } else {
            setcontrolCounterListProducts(controlCounterListProducts + 1)
            setProductList([...productsList, productsChosen])
            setShowScroll(true)
            setControlFormProductSubmit(!controlFormProductSubmit)
            setProduct({        
                id: '',
                product:'',
                price: '',
                image: '',
                unityType: ''
            })
        }

    }

    const handleRemoveProductList = (id) => {
        setcontrolCounterListProducts(controlCounterListProducts - 1)
        let updateList = productsList
        console.log(updateList)
        let index = productsList.findIndex(product => product.id === id)
        updateList.splice(index, 1)
        console.log('AATUALIZOUUU',updateList)
        setProductList([...updateList])
        if(updateList.length <1){setShowScroll(false)}      
    }

    const [footerProp, setFooterProp] = React.useState('')

    const footerList = []

    const [showFooterButton, setShowFooterButton] = React.useState(true) 
    const [showCreateJornalButton, setShowCreateJornalButton] = React.useState(false) 
    const [showCompletedSvg, setShowCompletedSvg] = React.useState(false)

    const handleFooterToJornal = (event) => {
        footerList.push(footerChosen.contactNumber)
        footerList.push(footerChosen.whatsAppNumber)
        footerList.push(footerChosen.address)
        footerList.push(footerChosen.extraInfo)
        footerList.push(footerChosen.cardFlag)
        setFooterProp(footerList)
        setShowFooterButton(false)
        setShowFooterWorkflow(false)
        setShowCompletedSvg(true)
        setShowCreateJornalButton(true)
    }

    const currencyMask = (event) => {
        console.log(event.target.value)
        let v = event.target.value.replace(/\D/g,'');
        v = (v/100).toFixed(2) + '';
        v = v.replace(".", ",");
        v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
        v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
        setProduct({...productsChosen, price: v})
    }

    // dialog



    const handleDialog = () => {
        setShowDialog(!showDialog)
    }

    return (
        <React.Fragment>
        <DialogJornalPreview open={showDialog} handleDialog={handleDialog} jornalConfig={{products:productsList, footer: footerProp}}/>
        <SideMenuNavBar></SideMenuNavBar>
        <StyledFullContainer>
            
            {
                showProductsWorkflow ? 
                
                (
                    <>
                    <div style={{marginTop: '-300px', marginBottom: '200px'}}>Monte sua lista de produtos</div> 
                    <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <StyledScrollerContainer styles={showScroll}>
                    {
                        productsList.length ? (
                            productsList.map((product, index)=>{
                                return(
                                <StyledProductCard key={index}>
                                    <StyledContainerImage>
                                        <img src={product.image} alt="teste"/>
                                    </StyledContainerImage>
                                        <p>{product.product}</p>
                                        <p>Preço: R${product.price}</p>
                                        <p>{product.unityType}</p>
                                    <StyledContainerIcon>
                                        <i class="material-icons">edit</i>
                                        <i class="material-icons" onClick={()=>handleRemoveProductList(product.id)}>delete_forever</i>
                                    </StyledContainerIcon>
                                </StyledProductCard>
                            )
                        })) : ''              
                    }
                    </StyledScrollerContainer>
                    </div>
                    <StyledContainer>
                        <div style={{ width: 300 }}>
                            <Autocomplete
                                onChange={handleChangeProduct}
                                {...defaultProps}
                                freeSolo='false'
                                key={controlFormProductSubmit}
                                id="autocomplete"
                                renderInput={params =>{ console.log('PARAMS',params); return <TextField {...params}  label="Nome do Produto" margin="normal" fullWidth />}}
                            />
                        </div>
                        <div style={{marginLeft: "30px", marginTop: '8px'}}>
                            <InputLabel id="demo-simple-select-label">Tipo de Unidade</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="unity-type"
                            value={productsChosen.unityType}
                            onChange={handleChangeUnityType}
                            className={classes.selectEmpty}
                            >
                            <MenuItem value={'UN'}>UN</MenuItem>
                            <MenuItem value={'KG'}>KG</MenuItem>
                            <MenuItem value={'GR'}>GR</MenuItem>
                            </Select>

                        </div>
                    <TextField  onChange={currencyMask} key={controlFormProductSubmit} value={productsChosen.price} id="standard-basic" label="Preço" className={classes.inputText} />
                    <StyledAddButton>
                        <a><i onClick={handleAddProductsSubmit} class="material-icons">add_circle</i></a>
                    </StyledAddButton>
                    <Snackbar open={openSnack} autoHideDuration={5000} onClose={handleCloseSnack}>
                    <Alert onClose={handleCloseSnack} severity="error">
                        {snackAlertMessage}
                    </Alert>
                    </Snackbar>
                    </StyledContainer>
                    </>
                )

                : ''
            }

            {
                showCompletedSvg && ( 
                            <div>  
                                <svg style={{width: '400px'}} id="683d3690-e1ab-45db-97b8-9484a1649262" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="839.2" height="300" viewBox="0 0 839.2 727.08"><defs><linearGradient id="89bbdcf5-814f-445d-9d3e-b835a9e3988b" x1="484.88" y1="578.23" x2="600.81" y2="578.23" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="gray" stop-opacity="0.25"/><stop offset="0.54" stop-color="gray" stop-opacity="0.12"/><stop offset="1" stop-color="gray" stop-opacity="0.1"/></linearGradient><linearGradient id="1a6f3992-5825-4187-85b9-fb55ca803b83" x1="615.75" y1="530.72" x2="651.5" y2="530.72" xlinkHref="#89bbdcf5-814f-445d-9d3e-b835a9e3988b"/><linearGradient id="573de093-6af1-4ab3-932c-9e7f72f49645" x1="745.48" y1="595.56" x2="780.02" y2="595.56" xlinkHref="#89bbdcf5-814f-445d-9d3e-b835a9e3988b"/><linearGradient id="acf24d19-87bc-4cad-9346-f74a977c4433" x1="634.32" y1="509.85" x2="634.32" y2="96.02" xlinkHref="#89bbdcf5-814f-445d-9d3e-b835a9e3988b"/><linearGradient id="6f986e28-ee02-4c37-906f-8450bb16da28" x1="637.11" y1="586.77" x2="637.11" y2="513.3" xlinkHref="#89bbdcf5-814f-445d-9d3e-b835a9e3988b"/><linearGradient id="96b175d5-5e64-4663-918e-24aaa3155285" x1="454.92" y1="727.08" x2="454.92" y2="487.86" xlinkHref="#89bbdcf5-814f-445d-9d3e-b835a9e3988b"/></defs><title>happy birthday</title><g opacity="0.5"><rect x="124.18" y="129.51" width="3.33" height="18.87" fill="#47e6b1"/><rect x="304.58" y="215.97" width="3.33" height="18.87" transform="translate(351.25 -167.3) rotate(90)" fill="#47e6b1"/></g><g opacity="0.5"><rect x="242.55" y="540.19" width="3.33" height="18.87" fill="#47e6b1"/><rect x="422.95" y="626.65" width="3.33" height="18.87" transform="translate(880.29 125.01) rotate(90)" fill="#47e6b1"/></g><g opacity="0.5"><rect x="76.86" y="321" width="3.33" height="18.87" fill="#47e6b1"/><rect x="257.26" y="407.46" width="3.33" height="18.87" transform="translate(495.42 71.51) rotate(90)" fill="#47e6b1"/></g><g opacity="0.5"><rect x="659.86" width="3.33" height="18.87" fill="#47e6b1"/><rect x="840.26" y="86.46" width="3.33" height="18.87" transform="translate(757.42 -832.49) rotate(90)" fill="#47e6b1"/></g><g opacity="0.5"><rect x="97.97" y="46.93" width="3.33" height="18.87" fill="#47e6b1"/><rect x="278.37" y="133.39" width="3.33" height="18.87" transform="translate(242.45 -223.67) rotate(90)" fill="#47e6b1"/></g><path d="M345.5,559.31a4.08,4.08,0,0,1-2.27-4.93,2,2,0,0,0,.09-.45h0a2,2,0,0,0-3.67-1.36h0a2,2,0,0,0-.23.4,4.08,4.08,0,0,1-4.93,2.27,2,2,0,0,0-.45-.09h0a2,2,0,0,0-1.36,3.67h0a2,2,0,0,0,.4.23,4.08,4.08,0,0,1,2.27,4.93,2,2,0,0,0-.09.45h0a2,2,0,0,0,3.67,1.36h0a2,2,0,0,0,.23-.4,4.08,4.08,0,0,1,4.93-2.27,2,2,0,0,0,.45.09h0a2,2,0,0,0,1.36-3.67h0A2,2,0,0,0,345.5,559.31Z" transform="translate(-180.4 -86.46)" fill="#4d8af0" opacity="0.5"/><path d="M329,738.66a4.08,4.08,0,0,1-2.27-4.93,2,2,0,0,0,.09-.45h0a2,2,0,0,0-3.67-1.36h0a2,2,0,0,0-.23.4A4.08,4.08,0,0,1,318,734.6a2,2,0,0,0-.45-.09h0a2,2,0,0,0-1.36,3.67h0a2,2,0,0,0,.4.23,4.08,4.08,0,0,1,2.27,4.93,2,2,0,0,0-.09.45h0a2,2,0,0,0,3.67,1.36h0a2,2,0,0,0,.23-.4,4.08,4.08,0,0,1,4.93-2.27,2,2,0,0,0,.45.09h0a2,2,0,0,0,1.36-3.67h0A2,2,0,0,0,329,738.66Z" transform="translate(-180.4 -86.46)" fill="#4d8af0" opacity="0.5"/><path d="M936,341.66a4.08,4.08,0,0,1-2.27-4.93,2,2,0,0,0,.09-.45h0a2,2,0,0,0-3.67-1.36h0a2,2,0,0,0-.23.4A4.08,4.08,0,0,1,925,337.6a2,2,0,0,0-.45-.09h0a2,2,0,0,0-1.36,3.67h0a2,2,0,0,0,.4.23,4.08,4.08,0,0,1,2.27,4.93,2,2,0,0,0-.09.45h0a2,2,0,0,0,3.67,1.36h0a2,2,0,0,0,.23-.4,4.08,4.08,0,0,1,4.93-2.27,2,2,0,0,0,.45.09h0a2,2,0,0,0,1.36-3.67h0A2,2,0,0,0,936,341.66Z" transform="translate(-180.4 -86.46)" fill="#4d8af0" opacity="0.5"/><path d="M908.53,531a4.08,4.08,0,0,1-2.27-4.93,2,2,0,0,0,.09-.45h0a2,2,0,0,0-3.67-1.36h0a2,2,0,0,0-.23.4,4.08,4.08,0,0,1-4.93,2.27,2,2,0,0,0-.45-.09h0a2,2,0,0,0-1.36,3.67h0a2,2,0,0,0,.4.23,4.08,4.08,0,0,1,2.27,4.93,2,2,0,0,0-.09.45h0a2,2,0,0,0,3.67,1.36h0a2,2,0,0,0,.23-.4,4.08,4.08,0,0,1,4.93-2.27,2,2,0,0,0,.45.09h0a2,2,0,0,0,1.36-3.67h0A2,2,0,0,0,908.53,531Z" transform="translate(-180.4 -86.46)" fill="#4d8af0" opacity="0.5"/><path d="M929,153.67a4.08,4.08,0,0,1-2.27-4.93,2,2,0,0,0,.09-.45h0a2,2,0,0,0-3.67-1.36h0a2,2,0,0,0-.23.4,4.08,4.08,0,0,1-4.93,2.27,2,2,0,0,0-.45-.09h0a2,2,0,0,0-1.36,3.67h0a2,2,0,0,0,.4.23,4.08,4.08,0,0,1,2.27,4.93,2,2,0,0,0-.09.45h0a2,2,0,0,0,3.67,1.36h0a2,2,0,0,0,.23-.4,4.08,4.08,0,0,1,4.93-2.27,2,2,0,0,0,.45.09h0a2,2,0,0,0,1.36-3.67h0A2,2,0,0,0,929,153.67Z" transform="translate(-180.4 -86.46)" fill="#4d8af0" opacity="0.5"/><path d="M993.22,645.72a4.08,4.08,0,0,1-2.27-4.93,2,2,0,0,0,.09-.45h0a2,2,0,0,0-3.67-1.36h0a2,2,0,0,0-.23.4,4.08,4.08,0,0,1-4.93,2.27,2,2,0,0,0-.45-.09h0a2,2,0,0,0-1.36,3.67h0a2,2,0,0,0,.4.23,4.08,4.08,0,0,1,2.27,4.93,2,2,0,0,0-.09.45h0a2,2,0,0,0,3.67,1.36h0a2,2,0,0,0,.23-.4,4.08,4.08,0,0,1,4.93-2.27,2,2,0,0,0,.45.09h0a2,2,0,0,0,1.36-3.67h0A2,2,0,0,0,993.22,645.72Z" transform="translate(-180.4 -86.46)" fill="#4d8af0" opacity="0.5"/><circle cx="6.66" cy="257.78" r="6.66" fill="#f55f44" opacity="0.5"/><circle cx="749.83" cy="146.09" r="6.66" fill="#f55f44" opacity="0.5"/><circle cx="446.92" cy="395.96" r="7.5" fill="#f55f44" opacity="0.5"/><circle cx="446.92" cy="395.96" r="7.5" fill="#f55f44" opacity="0.5"/><circle cx="832.55" cy="346.34" r="6.66" fill="#f55f44" opacity="0.5"/><circle cx="294.17" cy="47.27" r="7.5" fill="#47e6b1" opacity="0.5"/><circle cx="721.49" cy="621.41" r="6.66" fill="#f55f44" opacity="0.5"/><path d="M487.1,468c-3.94,12.79,2,27.91,13.53,34.64,4.84,2.82,10.41,4.24,15.1,7.3,10.19,6.64,14.21,19.35,17.52,31.05,3.8,13.45,7.61,27.67,4.13,41.2-2.22,8.63-7.27,16.26-10.14,24.7a51.54,51.54,0,0,0-2.45,22c.42,3.94,1.4,8,4.1,10.94,3.9,4.2,10.18,4.83,15.82,5.84a76.78,76.78,0,0,1,55.2,42.74" transform="translate(-180.4 -86.46)" fill="none" stroke-miterlimit="10" stroke-width="2" stroke="url(#89bbdcf5-814f-445d-9d3e-b835a9e3988b)"/><path d="M488.31,468c-3.94,12.79,2,27.91,13.53,34.64,4.84,2.82,10.41,4.24,15.1,7.3,10.19,6.64,14.21,19.35,17.52,31.05,3.8,13.45,7.61,27.67,4.13,41.2-2.22,8.63-7.27,16.26-10.14,24.7a51.54,51.54,0,0,0-2.45,22c.42,3.94,1.4,8,4.1,10.94,3.9,4.2,10.18,4.83,15.82,5.84a76.78,76.78,0,0,1,55.2,42.74" transform="translate(-180.4 -86.46)" fill="none" stroke="#535461" stroke-miterlimit="10" stroke-width="2"/><path d="M637.45,372.4c-9.72,13.55-19.81,28.12-20.64,44.78-1.27,25.59,19.2,46.52,28.34,70.46a83.74,83.74,0,0,1-2.81,65.5c-4.46,9.22-10.82,18.38-10,28.59.47,6.23,3.59,11.9,6.1,17.63a99.4,99.4,0,0,1-5.77,89.75" transform="translate(-180.4 -86.46)" fill="none" stroke-miterlimit="10" stroke-width="2" stroke="url(#1a6f3992-5825-4187-85b9-fb55ca803b83)"/><path d="M638.65,372.4C628.94,386,618.85,400.53,618,417.18c-1.27,25.59,19.2,46.52,28.34,70.46a83.74,83.74,0,0,1-2.81,65.5c-4.46,9.22-10.82,18.38-10,28.59.47,6.23,3.59,11.9,6.1,17.63a99.4,99.4,0,0,1-5.77,89.75" transform="translate(-180.4 -86.46)" fill="none" stroke="#535461" stroke-miterlimit="10" stroke-width="2"/><path d="M773.83,494.28l4.7,38.31c.62,5.09,1.15,10.64-1.58,15-2.59,4.11-7.45,6.07-11.23,9.11-12.41,10-11.28,29.11-7,44.45s10.44,31.82,4.49,46.58c-2.46,6.09-6.8,11.22-10,16.94a51.87,51.87,0,0,0-6.2,32.18" transform="translate(-180.4 -86.46)" fill="none" stroke-miterlimit="10" stroke-width="2" stroke="url(#573de093-6af1-4ab3-932c-9e7f72f49645)"/><path d="M775,494.28l4.7,38.31c.62,5.09,1.15,10.64-1.58,15-2.59,4.11-7.45,6.07-11.23,9.11-12.41,10-11.28,29.11-7,44.45s10.44,31.82,4.49,46.58c-2.46,6.09-6.8,11.22-10,16.94a51.87,51.87,0,0,0-6.2,32.18" transform="translate(-180.4 -86.46)" fill="none" stroke="#535461" stroke-miterlimit="10" stroke-width="2"/><g opacity="0.7"><path d="M895.7,336.82A113.6,113.6,0,0,0,747,228.83a136.45,136.45,0,0,0,1.45-19.27,113.53,113.53,0,0,0-226.78-8.14,113.6,113.6,0,0,0-148.76,108c0,57,42,138,96.65,152.35l8.51,4.86-4.62,15.83h27.36l-5.94-15.85,8.47-4.84c42.26-11.09,76.91-62,90.48-110.83a83,83,0,0,0,24.22,11l8.51,4.86L622,382.59h27.36l-5.94-15.85,8.47-4.84a79.21,79.21,0,0,0,18-7.31c7.31,54.78,46.2,121.66,95.41,134.57l8.51,4.86-4.62,15.83h27.36L790.59,494l8.47-4.84C853.75,474.81,895.7,393.78,895.7,336.82Z" transform="translate(-180.4 -86.46)" fill="url(#acf24d19-87bc-4cad-9346-f74a977c4433)"/></g><polygon points="324.76 390.14 298.28 390.14 302.92 374.26 318.8 374.26 324.76 390.14" fill="#f55f44"/><path d="M601.12,309.16c0,60.68-49.19,149.57-109.86,149.57s-109.86-88.9-109.86-149.57a109.86,109.86,0,0,1,219.73,0Z" transform="translate(-180.4 -86.46)" fill="#f55f44"/><polygon points="318.8 374.92 302.92 374.92 293.65 369.63 328.07 369.63 318.8 374.92" fill="#535461"/><path d="M451.55,223.78s-46.33,25.15-52.95,75.45" transform="translate(-180.4 -86.46)" fill="#fff" opacity="0.1"/><polygon points="468.43 293.56 441.95 293.56 446.59 277.68 462.47 277.68 468.43 293.56" fill="#4d8af0"/><path d="M744.79,212.58c0,60.68-49.19,149.57-109.86,149.57s-109.86-88.9-109.86-149.57a109.86,109.86,0,0,1,219.73,0Z" transform="translate(-180.4 -86.46)" fill="#6c63ff"/><polygon points="462.47 278.34 446.59 278.34 437.32 273.04 471.74 273.04 462.47 278.34" fill="#535461"/><path d="M595.22,127.2s-46.33,25.15-52.95,75.45" transform="translate(-180.4 -86.46)" fill="#fff" opacity="0.1"/><polygon points="610.89 416.71 584.41 416.71 589.05 400.82 604.93 400.82 610.89 416.71" fill="#3ad29f"/><path d="M887.25,335.72c0,60.68-49.19,149.57-109.86,149.57S667.52,396.4,667.52,335.72a109.86,109.86,0,1,1,219.73,0Z" transform="translate(-180.4 -86.46)" fill="#3ad29f"/><polygon points="604.93 401.48 589.05 401.48 579.78 396.19 614.2 396.19 604.93 401.48" fill="#535461"/><path d="M737.68,250.34s-46.33,25.15-52.95,75.45" transform="translate(-180.4 -86.46)" fill="#fff" opacity="0.1"/><g opacity="0.5"><path d="M696.81,521.89c-6.37-6.39-15.66-8.93-26.16-7.16-9.82,1.66-19.65,7-27.67,15a32.34,32.34,0,0,0-5.79,7.94,32.41,32.41,0,0,0-5.74-8.23h0C623.57,521.29,613.83,515.8,604,514c-10.46-2-19.79.43-26.28,6.71s-9.15,15.53-7.53,26.05c1.52,9.84,6.7,19.75,14.59,27.88,16.58,17.11,49.67,10.43,51.07,10.13l.41-.09,1.27.29c1.4.32,34.37,7.57,51.24-9.25,8-8,13.37-17.81,15.07-27.63C705.69,537.58,703.18,528.29,696.81,521.89Zm-66.52,53c-8,1.08-27.93,2.54-37.82-7.67-6.36-6.57-10.52-14.41-11.71-22.1-1.08-7,.48-13,4.42-16.78a14.78,14.78,0,0,1,5.39-3.3,22.24,22.24,0,0,1,11.52-.58c7.64,1.43,15.36,5.83,21.72,12.4C633.7,547,631.62,566.92,630.29,574.88Zm63.11-28.61c-1.32,7.66-5.61,15.44-12.09,21.89-10.07,10-30,8.23-37.95,7-1.19-8-2.93-27.89,7.14-37.93,6.48-6.45,14.27-10.72,21.93-12a22.24,22.24,0,0,1,11.51.78,14.78,14.78,0,0,1,5.34,3.4C693.14,533.29,694.6,539.27,693.4,546.27Z" transform="translate(-180.4 -86.46)" fill="url(#6f986e28-ee02-4c37-906f-8450bb16da28)"/></g><path d="M639.1,582.59l-3.15.66c-1.34.28-33,6.67-48.87-9.7-7.54-7.78-12.5-17.26-14-26.68-1.56-10.07,1-18.92,7.2-24.93s15.13-8.29,25.14-6.42c9.37,1.75,18.69,7,26.23,14.79h0c15.86,16.37,8.48,47.82,8.16,49.15ZM592.57,526.1a14.14,14.14,0,0,0-5.16,3.16c-3.76,3.65-5.26,9.35-4.23,16.06,1.14,7.35,5.12,14.86,11.21,21.15,9.47,9.77,28.54,8.37,36.19,7.34,1.27-7.61,3.27-26.63-6.2-36.4h0c-6.09-6.28-13.47-10.5-20.79-11.86A21.28,21.28,0,0,0,592.57,526.1Z" transform="translate(-180.4 -86.46)" fill="#6c63ff"/><path d="M634.42,582.73l-.7-3.14c-.3-1.34-7.14-32.91,9-49h0c7.68-7.65,17.08-12.74,26.48-14.33,10-1.7,18.93.73,25,6.85s8.5,15,6.77,25c-1.62,9.39-6.74,18.78-14.42,26.43-16.14,16.09-47.69,9.15-49,8.85ZM681.92,527a21.28,21.28,0,0,0-11-.75c-7.34,1.24-14.79,5.33-21,11.5h0c-9.64,9.61-8,28.65-6.83,36.29,7.63,1.16,26.68,2.89,36.31-6.71,6.2-6.18,10.3-13.62,11.57-21,1.15-6.69-.25-12.42-3.95-16.13A14.14,14.14,0,0,0,681.92,527Z" transform="translate(-180.4 -86.46)" fill="#6c63ff"/><g opacity="0.5"><polygon points="608.43 487.86 301.42 487.86 301.42 549.29 317.37 549.29 317.37 727.08 592.48 727.08 592.48 549.29 608.43 549.29 608.43 487.86" fill="url(#96b175d5-5e64-4663-918e-24aaa3155285)"/></g><rect x="320.85" y="506.43" width="268.15" height="217.63" fill="#535461"/><rect x="429.66" y="545.29" width="50.52" height="178.76" fill="#6c63ff"/><rect x="320.85" y="494.77" width="268.15" height="54.41" opacity="0.1"/><rect x="305.31" y="490.88" width="299.24" height="54.41" fill="#535461"/><rect x="429.66" y="490.88" width="50.52" height="54.41" fill="#6c63ff"/></svg>
                            </div>
                    )
            }
            
            {
                showFooterWorkflow ? (
                    <StyledFooterCreatorContainer>
                        <StyledContactInput>
                            <div>
                            <TextField
                                id="standard-full-width"
                                label="Telefone"
                                className={classes.inputStyleFooter}
                                onChange={handleChangeFooterContactFone}
                                placeholder="Telefone"
                                helperText="O Telefone de contato que será mostrado no jornal para o cliente"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            </div>
                            <div>
                            <TextField
                                id="standard-full-width"
                                label="WhatsApp"
                                className={classes.inputStyleFooter}
                                onChange={handleChangeFooterContactWhatsapp}
                                placeholder="WhatsApp"
                                helperText="O WhatsApp que será mostrado no jornal para o cliente"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            </div>
                        </StyledContactInput>
                        <TextField
                            id="standard-full-width"
                            label="Endereço"
                            className={classes.inputStyleFooter}
                            onChange={handleChangeFooterAddress}
                            placeholder="Endereço"
                            helperText="Coloque todas as informações de endereço, como rua, bairro, numero, cidade e etc."
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="standard-full-width"
                            label="Informação Adicional"
                            className={classes.inputStyleFooter}
                            onChange={handleChangeFooterExtraInfo}
                            placeholder="Coloque uma informação adicional caso queira"
                            helperText="Exp: 'acesse o nosso site e peça delivery: www.meumercado.com.br'"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <label style={{fontSize: '0.8em', color: '#2267ff', fontWeight: '900', marginTop:'10px' }}>Bandeiras de Cartões Aceitas</label>
                        <Select
                            labelId="demo-mutiple-chip-label"
                            id="demo-mutiple-chip"
                            multiple
                            label="teste"
                            value={cardName}
                            className={classes.inputStyleFooter}
                            onChange={handleChangeCard}
                            input={<Input id="select-multiple-chip" />}
                            renderValue={selected => (
                                <div className={classes.chips}>
                                {selected.map(value => (
                                    <Chip key={value} label={value} className={classes.chip} />
                                ))}
                                </div>
                            )}
                            MenuProps={MenuProps}
                            >
                            {creditCards.map(card => (
                                <MenuItem key={card._id} data={card.imageUrl} value={card.name} style={getStyles(card.name, cardName, theme)}>
                                    {card.name}
                                </MenuItem>
                            ))}
                        </Select>
                        {
                            showFooterButton && <StyledButton onClick={handleFooterToJornal}>ADICIONAR RODAPÉ</StyledButton>
                        }

                        {/* <Link to={{pathname: '/core', state:{products:productsList, footer: footerList}}}>
                            <StyledButton onClick={handleFooterToJornal}>ADICIONAR RODAPÉ</StyledButton>
                        </Link> */}
                    </StyledFooterCreatorContainer>
                )
                :
                ''

            }

            {
                showCreateJornalButton && <StyledButtonCreateJornal onClick={()=> {handleDialog()}}>GERAR TABLOIDE</StyledButtonCreateJornal>
            }

            { 
                showCreateJornal ? 
                    <StyledButton style={{width:'600px'}} onClick={handleNextFooterWorkflow}>Próximo</StyledButton>
                : 
                ''
            }

        </StyledFullContainer>
        </React.Fragment>
  )
}