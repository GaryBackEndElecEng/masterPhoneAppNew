import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Button,
  useAnimatedValue,
  Animated
} from "react-native";
import React, { useEffect, useState } from "react";
import { Box, Stack,Text, } from "@react-native-material/core";
import { AntDesign } from "@expo/vector-icons";
import api from "../components/axios/api";
import faqs from "../components/extra/faqs";

const FAQS = () => {

  const [FAQS, setFAQS] = useState({ loaded: false, data: [] });
  const [open, setOpen] = useState({ id: null, open: false });
  const [delay,setDelay]=useState(false);
  const trans=delay ? "translateY(0%)":"translateY(-100%)";
  const transit=delay ? "all 1s ease-in":"";


  function styleChange(){
    if(delay){
        styles.answerEffect= {
            opacity:1,
            transform:'translate(0,0)',
            transition:"all 1s ease-in",
          }
        return styles.answerEffect;
    }
  }
  useEffect(()=>{
    if(open.open){
        setTimeout(()=>{
            setDelay(true);
        },500);
    }
  },[open.open]);

  useEffect(() => {
    const getFAQS = async () => {
      try {
        const res = await api.get("/FAQS/");
        const faqs = res.data;
        setFAQS({ loaded: true, data: faqs });
        // console.log(faqs)
      } catch (error) {
        console.error(error.message);
      }
    };
    getFAQS();
    // setFAQS({ data: faqs, loaded: true });
  }, []);

  const handleQuest = (e, id) => {
    // e.preventDefault();
    if (!open.open) {
      setOpen({ id: id, open: true });
    } else {
      setOpen({ id: null, open: false });
      setDelay(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      
        <Stack direction="column" style={styles.stackCol1}>
          {FAQS.loaded &&
            FAQS.data.map((obj, index) => (
              <Stack
                direction="column"
                key={`${obj.id}--${index}`}
                style={styles.StackCol2}
                spacing={2}
              >
                <Stack direction="row" spacing={2} style={styles.StackCol3}>
                  
                  <TouchableOpacity>
                    {open.open && open.id === obj.id ? (
                      <AntDesign
                        name="caretdown"
                        size={18}
                        color="red"
                        style={{marginTop:20,marginBottom:20,marginLeft:0}}
                      />
                    ) : (
                      <AntDesign
                        name="caretup"
                        size={18}
                        color="black"
                        style={{marginTop:20,marginBottom:20,marginLeft:0}}
                      />
                    )}
                  </TouchableOpacity>
                  <Text onPress={(e) => handleQuest(e, obj.id)} variant="h6" style={{fontWeight:400,paddingRight:10,paddingLeft:10}} >
                    {obj.question}
                  </Text>
                </Stack>
                {open.open && open.id === obj.id && (
                <Text style={[styles.answer,styleChange()]} variant="h6">{obj.answer}</Text>
              )}
              </Stack>
              
            ))}
        </Stack>
      
    </SafeAreaView>
  );
};

export default FAQS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  scroll: {
    flex: 1,
  },
  stackCol1: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap:20,
   
  },
  StackCol2: {
    justifyContent: "flex-start",
    alignItems: "center",
    padding:5
  },
  StackCol3: {
    justifyContent: "flex-start",
    alignItems: "center",
    gap:10
  },
  button: {
    color: "black",
    backgroundColor: "lightblue",
    fontSize: 10,
  },
  answer: {
    opacity:0,
    marginTop: 20,
    marginBottom: 20,
    padding:10,
    color: "blue",
    transform:"translateY(-30px)",
    transition:"all 1s ease-in",
  },
  answerEffect: {
    transform:"translateY(0px)",
    transition:"all 1s ease-in",
  },
});
