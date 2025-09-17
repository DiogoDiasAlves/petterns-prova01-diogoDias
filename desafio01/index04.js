//aqui é o Abstract
class Button {
    render() {
      throw new Error("Este método deve ser implementado.");
    }
  }
  
  class WindowUI {
    render() {
      throw new Error("Este método deve ser implementado.");
    }
  }
  

  class LightButton extends Button {
    render() {
      return "Botão branco criado";
    }
  }
  
  class DarkButton extends Button {
    render() {
      return "Botão preto criado";
    }
  }
  
  class LightWindow extends WindowUI {
    render() {
      return "Janela clara aberta";
    }
  }
  
  class DarkWindow extends WindowUI {
    render() {
      return "Janela escura aberta";
    }
  }
  
 
  class UIFactory {
    createButton() {
      throw new Error("Este método deve ser implementado.");
    }
  
    createWindow() {
      throw new Error("Este método deve ser implementado.");
    }
  }
  
 
  class LightThemeFactory extends UIFactory {
    createButton() {
      return new LightButton();
    }
  
    createWindow() {
      return new LightWindow();
    }
  }
  
  class DarkThemeFactory extends UIFactory {
    createButton() {
      return new DarkButton();
    }
  
    createWindow() {
      return new DarkWindow();
    }
  }
  
 
  function clientCode(theme) {
    let factory;
  
    if (theme === "light") {
      factory = new LightThemeFactory();
    } else {
      factory = new DarkThemeFactory();
    }
  
    const button = factory.createButton();
    const windowUI = factory.createWindow();
  
    console.log(button.render());
    console.log(windowUI.render());
  }
  
  
  const theme = "dark";
  clientCode(theme);
  