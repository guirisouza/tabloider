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
    StyledContactInput
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

    const footerList = []

    const handleFooterToJornal = (event) => {
        footerList.push(footerChosen.contactNumber)
        footerList.push(footerChosen.whatsAppNumber)
        footerList.push(footerChosen.address)
        footerList.push(footerChosen.extraInfo)
        footerList.push(footerChosen.cardFlag)
        console.log('OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO', footerList)
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

    return (
        <React.Fragment>
        <SideMenuNavBar></SideMenuNavBar>
        <StyledFullContainer>
            
            {
                showProductsWorkflow ? 
                
                (
                    <>
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
                            helperText="Exp: 'acesse o nosso site e peça delivery: www.soufoda.com.br'"
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
                        <Link to={{pathname: '/core', state:{products:productsList, footer: footerList}}}>
                            <StyledButton onClick={handleFooterToJornal}>ADICIONAR RODAPÉ</StyledButton>
                        </Link>
                    </StyledFooterCreatorContainer>
                )
                :
                ''

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