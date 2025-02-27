import {useState} from "react";
import {Box, Button, Container, Heading, Input, useColorModeValue, VStack} from "@chakra-ui/react";
import {RiAddLargeLine} from "react-icons/ri";

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: ""
    });

    function handleAddProduct() {
        setNewProduct(newProduct);
        console.log("updated product", newProduct);
    }
    return (
        <Container maxW={"container.sm"} p={8}>
            <VStack spacing={8}>
                <Heading as={"h1"}
                         size={"2xl"}
                         textAlign={"center"}
                         mb={8}>
                    Create Product
                </Heading>
                <Box w={"full"}
                     bg={useColorModeValue("white", "gray.900")}
                     p={8}
                     rounded={"lg"}
                     shadow={"md"}>
                    <VStack spacing={4}>
                        <Input placeholder='Name'
                               name="name"
                               value={newProduct.name}
                               onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                        />
                        <Input placeholder='Price'
                               type="number"
                               name="price"
                               min={0}
                               value={newProduct.price}
                               onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                        />
                        <Input placeholder='Image URL'
                               name="image"
                               value={newProduct.image}
                               onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                        />
                        <Button w={"full"} mt={8} leftIcon={<RiAddLargeLine/>} variant={"outline"}

                                bgGradient='linear(to-l, #7928CA, #FF0080)'
                                _hover={{
                                    backgroundColor: "#FF0080"
                                }}
                                color={"#fff"}
                                onClick={handleAddProduct}
                        >Create</Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
}
export default CreatePage;