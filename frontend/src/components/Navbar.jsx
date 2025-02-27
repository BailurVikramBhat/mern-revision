import {Button, Container, Flex, HStack, Text, useColorMode} from "@chakra-ui/react";
import {Link} from "react-router-dom";
// import {PlusSquareIcon} from "@chakra-ui/icons";
import {RiAddLargeLine} from "react-icons/ri";
import { RiMoonClearLine } from "react-icons/ri";
import { BsSun } from "react-icons/bs";

const Navbar = () => {
    const {colorMode, toggleColorMode} = useColorMode();
    return (<Container maxW={"1140px"}
                       px={4}
                       borderBottomColor={"#FF0080"}
                       borderBottomWidth={2}>
            <Flex h={16}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  flexDir={{
                      base: "column", sm: "row"
                  }}>
                <Text bgGradient='linear(to-l, #7928CA, #FF0080)'
                      bgClip='text'
                      fontSize={{
                          base: "22", sm: "28"
                      }}
                      fontWeight={"bold"}>
                    <Link to={"/"}>Product Store</Link>
                </Text>
                <HStack spacing={2}
                        alignItems={"center"}>
                    <Link to={"/create"}>

                        <Button leftIcon={<RiAddLargeLine/>}
                                bgGradient='linear(to-l, #7928CA, #FF0080)'
                                _hover={{
                                    backgroundColor: "#FF0080"
                                }}
                                color={"#fff"}>Create</Button>

                    </Link>
                    <Button onClick={toggleColorMode} variant={"ghost"} borderRadius={100}>
                        {colorMode === "dark" ? <BsSun/> : <RiMoonClearLine/>}
                        </Button>
                </HStack>
            </Flex>

        </Container>
    )
}
export default Navbar;