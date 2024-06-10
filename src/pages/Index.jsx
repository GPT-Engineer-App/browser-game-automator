import React, { useState } from "react";
import { Container, VStack, HStack, Text, Input, Button, Textarea, useToast } from "@chakra-ui/react";
import { FaPlay, FaStop } from "react-icons/fa";

const Index = () => {
  const [script, setScript] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const toast = useToast();

  const handleStart = () => {
    if (script.trim() === "") {
      toast({
        title: "Error",
        description: "Script cannot be empty.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setIsRunning(true);
    // Here you would add the logic to start the automation script
    console.log("Starting script:", script);
  };

  const handleStop = () => {
    setIsRunning(false);
    // Here you would add the logic to stop the automation script
    console.log("Stopping script");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">ブラウザゲーム自動化ツール</Text>
        <Textarea placeholder="自動化スクリプトをここに入力してください..." value={script} onChange={(e) => setScript(e.target.value)} size="md" height="200px" />
        <HStack spacing={4}>
          <Button leftIcon={<FaPlay />} colorScheme="teal" onClick={handleStart} isDisabled={isRunning}>
            開始
          </Button>
          <Button leftIcon={<FaStop />} colorScheme="red" onClick={handleStop} isDisabled={!isRunning}>
            停止
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
