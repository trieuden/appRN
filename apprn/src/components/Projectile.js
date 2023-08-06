import React, { useState,useEffect, useRef } from 'react';
import { View, Dimensions, TouchableOpacity,Image } from 'react-native';

const { width, height } = Dimensions.get('window');
const centerX = width / 2;
const centerY = height / 2;

const Constructor = ({ x, y, radius, color }) => {
  return (
    <View
      style={{
        position: 'absolute',
        left: x - radius,
        top: y - radius,
        width: radius * 2,
        height: radius * 2,
        borderRadius: radius,
        backgroundColor: color,
      }}
    />
  );
};

const Projectile = ({index, x, y, a, b, removeProjectile }) => {
  const [position, setPosition] = useState({ index,x, y, a, b });
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const prevPositionRef = useRef(position); // Khởi tạo một biến ref để lưu giá trị prevPosition
  
  const speed = 7;
  const action = async () => {
    const distanceX = centerX - position.a;
    const distanceY = centerY - position.b;
    const magnitude = Math.sqrt(distanceX ** 2 + distanceY ** 2);
  
    const stepX = (distanceX / magnitude) * speed;
    const stepY = (distanceY / magnitude) * speed;
  
    while (true) {
      setPosition((prevPosition) => {
        prevPositionRef.current = prevPosition;
        return {
          x: prevPosition.x - stepX,
          y: prevPosition.y - stepY,
        };
      });
      if(prevPositionRef.current.x > width - 20 || prevPositionRef.current.x < 20 || prevPositionRef.current.y > height - 20|| prevPositionRef.current.y < 20){
          removeProjectile({index: position.index });
        break
      }
      // console.log(prevPositionRef.current.x, prevPositionRef.current.y);

      await delay(30);
    }
  };
  useEffect(() => {
    action();
  }, []);

  return <Constructor x={position.x} y={position.y} radius={20} color="red" />;
};


const Projectiles = () => {
  const [projectiles, setProjectiles] = useState([]);

  const handlePress = (event) => {
    const { pageX, pageY } = event.nativeEvent;
    const newProjectiles = { x: centerX, y: centerY, a: pageX, b: pageY, index: projectiles.length };
    setProjectiles((prevProjectiles) => [...prevProjectiles, newProjectiles]);
  };

  
  const removeProjectile = ({ index }) => {
    setProjectiles((prevProjectiles) =>
      prevProjectiles.filter((projectile) => (projectile.index !==index))
    );
  };
  useEffect(() => {
    console.log(projectiles)
  }, [projectiles]);

  return (
    <View style={{ backgroundColor: "#b3b3ff", flex: 1, display: "flex", width: "100%", height: "100%" }}>
      {/* <Image
          source={require("../../assets/man.png")}
          style={{
          left: centerX,
          top: centerY,
          width: 50,
          height: 50}}
        /> */}
      <TouchableOpacity onPress={handlePress} style={{ flex: 1 }}>
        {projectiles.map((projectile, index) => (
          <Projectile key={index} index={projectile.index} x={projectile.x} y={projectile.y} a={projectile.a} b={projectile.b} removeProjectile={removeProjectile} />
        ))}
      </TouchableOpacity>
    </View>
  );
};



export default Projectiles;
